import React, { useState } from "react";
import { rowMusicCardProps } from "@/types";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Styles, { height, width } from "@/style";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import SkeletonLoader from "expo-skeleton-loader";
import MusicCardItem from "./RowMusicCardItem";
import Card from "./LibraryCard";

const data = [
  {
    name: "Joel Lwaga - Olodumare",
    image: "https://i.ytimg.com/vi/CJ2zMja5KR8/hqdefault.jpg",
    link: "https://tubidy.guru/download/joel-lwaga-olodumare/video/CK2aNkh9LS0",
    duration: "3:07",
  },
  {
    name: "Marioo & Bien - Nairobi",
    image: "https://i.ytimg.com/vi/04GKMWEwe98/hqdefault.jpg",
    link: "https://tubidy.guru/download/marioo-bien-nairobi/video/78GLNXExe40",
    duration: "3:23",
  },
  {
    name: "Koppa Gekon - Calender",
    image: "https://i.ytimg.com/vi/PmzJ0XaHo_U/hqdefault.jpg",
    link: "https://tubidy.guru/download/koppa-gekon-calender/video/QnaK7YhIp_V",
    duration: "3:19",
  },
  {
    name: "Iyanii, Mwanaa & Cedo - Kifo Cha Mende",
    image: "https://i.ytimg.com/vi/ywxrFIuokQk/hqdefault.jpg",
    link: "https://tubidy.guru/download/iyanii-mwanaa-cedo-kifo-cha-mende/video/zxysFJvplRl",
    duration: "2:56",
  },
  {
    name: "Mbosso - Kupenda",
    image: "https://i.ytimg.com/vi/IlNQ0L9wPsc/hqdefault.jpg",
    link: "https://tubidy.guru/download/mbosso-kupenda/video/JmOR7M4xQtc",
    duration: "2:56",
  },
  {
    name: "Ethic Entertainment - UKITAKA",
    image: "https://i.ytimg.com/vi/fxbRMdEwy6I/hqdefault.jpg",
    link: "https://tubidy.guru/download/ethic-entertainment-ukitaka/video/fybSNdExz6J",
    duration: "3:21",
  },
  {
    name: "Samidoh - Wendo Wa Ihera",
    image: "https://i.ytimg.com/vi/XUOLMFJDI8o/hqdefault.jpg",
    link: "https://tubidy.guru/download/samidoh-wendo-wa-ihera/video/YVPMNFKDJ0p",
    duration: "5:49",
  },
  {
    name: "Zuchu - Lollipop Dance",
    image: "https://i.ytimg.com/vi/xVSvIT3pROQ/hqdefault.jpg",
    link: "https://tubidy.guru/download/zuchu-lollipop-dance/video/yWTwJU3qSPR",
    duration: "2:16",
  },
  {
    name: "Savara - Show You Off",
    image: "https://i.ytimg.com/vi/bXlPI9TB20E/hqdefault.jpg",
    link: "https://tubidy.guru/download/savara-show-you-off/video/bYmQJ4UB27E",
    duration: "3:52",
  },
  {
    name: "BNXN & Ruger - Bae Bae (Live Session) | Vevo ctrl",
    image: "https://i.ytimg.com/vi/9SM0GM0hTW8/hqdefault.jpg",
    link: "https://tubidy.guru/download/bnxn-ruger-bae-bae-live-session-vevo-ctrl/video/4TN7GN7iUX0",
    duration: "2:34",
  },
  {
    name: "Ssaru & Trio Mio - Maintain (Ivo Ivo)",
    image: "https://i.ytimg.com/vi/-Nt0WJFgvTw/hqdefault.jpg",
    link: "https://tubidy.guru/download/ssaru-trio-mio-maintain-ivo-ivo/video/-Ou7XKFgwUx",
    duration: "2:13",
  },
  {
    name: "Willy Paul & JZyNO - Kuu Kuu",
    image: "https://i.ytimg.com/vi/zWnUsvm_KqI/hqdefault.jpg",
    link: "https://tubidy.guru/download/willy-paul-jzyno-kuu-kuu/video/aXoVtwn_LrJ",
    duration: "3:12",
  },
  {
    name: "Israel Mbonyi - Kaa Nami",
    image: "https://i.ytimg.com/vi/-qCBZixvylo/hqdefault.jpg",
    link: "https://tubidy.guru/download/israel-mbonyi-kaa-nami/video/-rCBAjywzmp",
    duration: "13:40",
  },
  {
    name: "Patrick Kubuya - Moyo Wangu (Live)",
    image: "https://i.ytimg.com/vi/HqGkbzg38Bk/hqdefault.jpg",
    link: "https://tubidy.guru/download/patrick-kubuya-moyo-wangu-live/video/IrGlbag30Bl",
    duration: "7:19",
  },
  {
    name: "Bella Kombo - Mungu Mmoja (Live) (feat. Evelyn Wanjiru & Neema Gospel Choir)",
    image: "https://i.ytimg.com/vi/Hb7NW5PsrJE/hqdefault.jpg",
    link: "https://tubidy.guru/download/bella-kombo-mungu-mmoja-live-feat-evelyn-wanjiru-neema-gospel-choir/video/Ib5OX9QtsKE",
    duration: "9:10",
  },
  {
    name: "Zuchu - WaleWale (feat. Diamond Platnumz)",
    image: "https://i.ytimg.com/vi/XkpK2WDC9q4/hqdefault.jpg",
    link: "https://tubidy.guru/download/zuchu-walewale-feat-diamond-platnumz/video/YlqL2XDC4r8",
    duration: "3:55",
  },
  {
    name: "Charisma - SINA NOMA",
    image: "https://i.ytimg.com/vi/lGMsfh8AqmM/hqdefault.jpg",
    link: "https://tubidy.guru/download/charisma-sina-noma/video/mGNtfi0HrnN",
    duration: "3:16",
  },
  {
    name: "Dyana Cods - Set It (feat. AJAY)",
    image: "https://i.ytimg.com/vi/9H8shcdvik8/hqdefault.jpg",
    link: "https://tubidy.guru/download/dyana-cods-set-it-feat-ajay/video/4I0ticdwjl0",
    duration: "2:58",
  },
  {
    name: "Toxic Lyrikali - CHINJE",
    image: "https://i.ytimg.com/vi/3gpYhCNNxko/hqdefault.jpg",
    link: "https://tubidy.guru/download/toxic-lyrikali-chinje/video/3gqZiCOOylp",
    duration: "3:32",
  },
  {
    name: "Marioo & Harmonize - Wangu",
    image: "https://i.ytimg.com/vi/UFcXUcrQKjc/hqdefault.jpg",
    link: "https://tubidy.guru/download/marioo-harmonize-wangu/video/VFcYVcsRLkc",
    duration: "2:50",
  },
  {
    name: "D-voice - Nani (feat. Zuchu)",
    image: "https://i.ytimg.com/vi/bw7BKxNP1B8/hqdefault.jpg",
    link: "https://tubidy.guru/download/d-voice-nani-feat-zuchu/video/bx5BLyOQ1B0",
    duration: "3:37",
  },
  {
    name: "Jux & Diamond Platnumz - OLOLUFE MI",
    image: "https://i.ytimg.com/vi/6Z5CEE25QH8/hqdefault.jpg",
    link: "https://tubidy.guru/download/jux-diamond-platnumz-ololufe-mi/video/6A9CEE29RI0",
    duration: "4:20",
  },
  {
    name: "Ibraah & Harmonize - Dharau",
    image: "https://i.ytimg.com/vi/Iw4t70zCf7s/hqdefault.jpg",
    link: "https://tubidy.guru/download/ibraah-harmonize-dharau/video/Jx8u57aCf5t",
    duration: "3:30",
  },
  {
    name: "Ayra Starr - Commas",
    image: "https://i.ytimg.com/vi/EhyzYPSHRQU/hqdefault.jpg",
    link: "https://tubidy.guru/download/ayra-starr-commas/video/EizaZQTISRV",
    duration: "2:37",
  },
  {
    name: "Darassa & Harmonize - Mazoea",
    image: "https://i.ytimg.com/vi/08knVOrxw_Q/hqdefault.jpg",
    link: "https://tubidy.guru/download/darassa-harmonize-mazoea/video/70loWPsyx_R",
    duration: "3:22",
  },
  {
    name: "HOOD BOYZ & From The Hood Music - NAMKATAA",
    image: "https://i.ytimg.com/vi/mIpJROtFCDA/hqdefault.jpg",
    link: "https://tubidy.guru/download/hood-boyz-from-the-hood-music-namkataa/video/nJqKSPuFCDH",
    duration: "2:25",
  },
  {
    name: "Zuchu - Antenna (Official Music Video)",
    image: "https://i.ytimg.com/vi/5fSO9jy0qTI/hqdefault.jpg",
    link: "https://tubidy.guru/download/zuchu-antenna-official-music-video/video/9fTP4kz7rUJ",
    duration: "4:06",
  },
  {
    name: "Vicky Brilliance - Wababa_",
    image: "https://i.ytimg.com/vi/fwFzYXeDjeE/hqdefault.jpg",
    link: "https://tubidy.guru/download/vicky-brilliance-wababa/video/fxFaZYeDkeE",
    duration: "4:23",
  },
  {
    name: "ROSÉ & Bruno Mars - APT.",
    image: "https://i.ytimg.com/vi/ekr2nIex040/hqdefault.jpg",
    link: "https://tubidy.guru/download/rose-bruno-mars-apt/video/els2oJey787",
    duration: "2:54",
  },
  {
    name: "GeniusJini x66 - Far Away (feat. Jay Melody)",
    image: "https://i.ytimg.com/vi/bAFQHwKvD24/hqdefault.jpg",
    link: "https://tubidy.guru/download/geniusjini-x66-far-away-feat-jay-melody/video/bHFRIxLwD28",
    duration: "3:16",
  },
];
const RowMusicCard = ({ Title, router }: rowMusicCardProps) => {
  const theme = useColorScheme() ?? "light";
  const [state, setState] = useState<"idle" | "loading">("idle");
  return (
    <ThemedView style={Styles.rowMusicCardsContainer}>
      {/* Showing title and nav button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <ThemedText style={[Styles.headText, { fontSize: 15 }]}>
          {Title}
        </ThemedText>
        {/* {state == "loading" ? (
          <SkeletonLoader duration={1800}>
            <SkeletonLoader.Item style={Styles.moreLoadingBtn} />
          </SkeletonLoader>
        ) : (
          <TouchableOpacity style={Styles.moreBtn}>
            <ThemedText style={{ fontSize: 11 }}>More</ThemedText>
            <AntDesign
              name="right"
              size={11}
              color={Colors[theme ?? "light"].text}
            />
          </TouchableOpacity>
        )} */}
      </View>
      {/* Showing content got from search */}
      {state == "loading" ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            minHeight: height * 0.23,
          }}
        >
          <SkeletonLoader
            style={Styles.rowCardLoadingContainer}
            duration={1800}
          >
            <SkeletonLoader.Item style={Styles.rowCardLoadingItem} />
            <SkeletonLoader.Item style={Styles.rowCardLoadingItem} />
            <SkeletonLoader.Item style={Styles.rowCardLoadingItem} />
          </SkeletonLoader>
        </ScrollView>
      ) : (
        <FlatList
          data={data.slice(0, 4)}
          // horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.rowMusicIListContainer}
          renderItem={({ item }) => (
            <Card
              duration={item.duration}
              name={item.name}
              link={item.link}
              image={item.image}
              router={router}
            />
          )}
        />
      )}
    </ThemedView>
  );
};

export default RowMusicCard;
