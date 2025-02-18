import React, { createContext, useContext, useState, useEffect } from "react";
import * as FileSystem from "expo-file-system";
import { useSQLiteContext } from "expo-sqlite";
import { getDownloads, insertDownload } from "@/api/database";

const DownloadContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [downloadQueue, setDownloadQueue] = useState([]);
  const [currentDownload, setCurrentDownload] = useState(null); // File being downloaded
  const [progress, setProgress] = useState(0); // Current download progress
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadedFiles, setDownloadedFiles] = useState([]);
  const [imageLink, setImageLink] = useState(null);
  const db = useSQLiteContext();
  // Add files to download queue if they are not already downloading
  const addToQueue = (file) => {
    if (
      currentDownload?.name === file.name ||
      downloadQueue.some((queuedFile) => queuedFile.name === file.name)
    ) {
      return;
    }
    setDownloadQueue((prevQueue) => [...prevQueue, file]);
  };

  const startNextDownload = async () => {
    if (isDownloading || downloadQueue.length === 0) return; // Prevent multiple downloads
    const nextFile = downloadQueue[0]; // Get the first item in queue
    setCurrentDownload(nextFile); // Set current file to download
    setIsDownloading(true);

    const callback = (downloadProgress) => {
      const progressPercent =
        (downloadProgress.totalBytesWritten /
          downloadProgress.totalBytesExpectedToWrite) *
        100;
      setProgress(progressPercent);
    };

    const downloadResumable = FileSystem.createDownloadResumable(
      nextFile.uri,
      FileSystem.documentDirectory + nextFile.name + ".mp3",
      {},
      callback
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();

      insertDownload(
        db,
        `${nextFile.name}`,
        `${nextFile.image}`,
        `${nextFile.duration}`,
        `${nextFile.uri}`,
        `${uri}`
      );

      setDownloadQueue((prev) => prev.slice(1));
      setProgress(0);
      setCurrentDownload(null);
      setIsDownloading(false);
      loader();
    } catch (error) {
      console.error("Download error:", error);
      setIsDownloading(false);
    }
  };
  const loader = async () => {
    const data = await getDownloads(db);
    setDownloadedFiles(data);
  };
  useEffect(() => {
    loader();
  }, []);
  useEffect(() => {
    if (!isDownloading && downloadQueue.length > 0) {
      startNextDownload();
    }
  }, [isDownloading, downloadQueue.length]);
  return (
    <DownloadContext.Provider
      value={{
        addToQueue,
        downloadQueue,
        currentDownload,
        progress,
        downloadedFiles,
        isDownloading,
      }}
    >
      {children}
    </DownloadContext.Provider>
  );
};

export const useDownload = () => useContext(DownloadContext);
