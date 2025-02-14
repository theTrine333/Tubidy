import React, { useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams, useRouter } from "expo-router";
import Styles, { blurhash, height } from "@/style";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { getSpecificGenre } from "@/api/q";
import Card from "@/components/LibraryCard";
import SkeletonLoader from "expo-skeleton-loader";
const Genre = () => {
  const params = useLocalSearchParams();
  const theme = useColorScheme() ?? "light";
  const [state, setState] = useState<"idle" | "loading" | "error">("loading");
  const [data, setData] = useState<any>();
  const router = useRouter();

  const loader = async () => {
    try {
      setState("loading");
      const temp = await getSpecificGenre(params.Link);
      setData(temp);
      setState("idle");
    } catch {
      setState("error");
    }
  };
  useEffect(() => {
    loader();
  }, []);
  return (
    <ThemedView style={{ flex: 1 }}>
      <Image
        style={Styles.genreImage}
        source={params.Image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <LinearGradient
        colors={["transparent", Colors[theme ?? "light"].background]} // Adjust colors for fade effect
        style={Styles.genreGradient}
      />
      {state == "loading" ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{
            minHeight: height * 0.23,
          }}
        >
          <SkeletonLoader duration={1800}>
            <SkeletonLoader.Item style={Styles.genreLoaderCard} />
            <SkeletonLoader.Item style={Styles.genreLoaderCard} />
            <SkeletonLoader.Item style={Styles.genreLoaderCard} />
            <SkeletonLoader.Item style={Styles.genreLoaderCard} />
            <SkeletonLoader.Item style={Styles.genreLoaderCard} />
            <SkeletonLoader.Item style={Styles.genreLoaderCard} />
            <SkeletonLoader.Item style={Styles.genreLoaderCard} />
          </SkeletonLoader>
        </ScrollView>
      ) : (
        <ThemedView
          style={[
            Styles.verticalListContainer,
            {
              borderColor: "white",
              height: height * 0.53,
              //   borderWidth: 1,
              paddingBottom: 0,
            },
          ]}
        >
          <FlatList
            data={data}
            contentContainerStyle={{ paddingBottom: 120 }}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                duration={item.duration}
                image={item.image}
                link={item.link}
                router={router}
              />
            )}
          />
        </ThemedView>
      )}

      <StatusBar hidden={true} />
    </ThemedView>
  );
};

export default Genre;
