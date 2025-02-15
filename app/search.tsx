import { getGenreSearch } from "@/api/database";
import { getSongSearch } from "@/api/q";
import GenreMusicCardItem from "@/components/GenreMusicCardItem";
import {
  ErrorCard,
  NoResultsCard,
  ResultCardItem,
} from "@/components/ResultsCard";
import SearchCard from "@/components/searchCard";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Styles, { height } from "@/style";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";

const Search = () => {
  const params = useLocalSearchParams();
  const type = params.inType;
  const db = useSQLiteContext();
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [text, setText] = useState(params.word);
  const [state, setState] = useState<"idle" | "loading" | "empty" | "error">(
    "loading"
  );
  const loader = async () => {
    let results;
    try {
      setState("loading");
      if (type == "songs") {
        results = await getSongSearch(text);
      } else {
        results = await getGenreSearch(db, text);
      }
      if (results.length == 0) {
        setState("empty");
        return;
      }
      setData(results);
      setState("idle");
    } catch (error) {
      setState("error");
    }
  };

  useEffect(() => {
    loader();
  }, []);
  return (
    <ThemedView style={Styles.container}>
      <SearchCard word={params.word} action={loader} setter={setText} />
      <ThemedView
        style={{
          //   borderWidth: 1,
          borderColor: "white",
          height: height * 0.8,
          paddingHorizontal: 10,
        }}
      >
        {state == "loading" ? (
          <ActivityIndicator color={Colors.Slider.primary} />
        ) : state == "error" ? (
          <ErrorCard />
        ) : state == "empty" ? (
          <NoResultsCard />
        ) : type == "songs" ? (
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => (
              <ResultCardItem
                name={item.Name}
                link={item.Link}
                image={item.Poster}
                router={router}
              />
            )}
          />
        ) : (
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => (
              <GenreMusicCardItem
                name={item.Name}
                link={item.Link}
                image={item.Poster}
                router={router}
              />
            )}
          />
        )}
      </ThemedView>
    </ThemedView>
  );
};

export default Search;
