import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./constants/Colors";
export const { width, height } = Dimensions.get("screen");
export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  toggleContainer: {
    width: width * 0.7,
    alignSelf: "center",
    marginTop: 20,
    paddingBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plaListContainer: {
    width: width,
    height: height * 0.3,
  },
  miniPlayerContainer: {
    flexDirection: "row",
    marginLeft: 10,
    borderBottomWidth: 0,
    borderRadius: 12,
    height: height * 0.07,
    elevation: 2,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    width: width * 0.9,
    alignItems: "center",
    bottom: 70,
    left: 10,
  },
  toggleisSelector: {
    width: width * 0.033,
    height: height * 0.01,
    borderRadius: 100,
  },

  searchCard: {
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "grey",
    alignSelf: "center",
    height: height * 0.05,
    width: width * 0.9,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  searchInput: {
    width: width * 0.75,
    height: height * 0.05,
  },
  playerImage: {
    borderRadius: 8,
    elevation: 4,
    width: width * 0.9,
    height: height * 0.4,
    // borderRadius: 150,
    alignSelf: "center",
  },
  bufferingIndicator: {
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 1000,
    height: height * 0.09,
    width: width * 0.2,
    justifyContent: "center",
    position: "absolute",
  },
  playerSlider: {
    width: width * 0.7,
  },
  playerBtn: {
    // borderWidth: 1,
    borderColor: "white",
    padding: 10,
    justifyContent: "center",
  },
  playerControlsContainer: {
    alignSelf: "center",
    width: width * 0.9,
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    // borderWidth: 1,
    borderColor: "white",
    marginTop: 30,
  },
  durationHolder: { marginTop: 10, flexDirection: "row", alignSelf: "center" },
  libraryImageComponent: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    width: width * 0.2,
    height: height * 0.07,
  },
  bottomModal: {
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    padding: 25,
    alignSelf: "flex-end",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height: height * 0.4,
    width: width,
  },
  libraryCard: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "grey",
    margin: 5,
    marginTop: 0,
    paddingTop: 3,
    borderRadius: 8,
  },
  rowImageComponent: {
    width: width * 0.45,
    height: height * 0.14,
    borderRadius: 8,
    margin: 5,
  },
  genreImage: {
    width: width,
    height: height * 0.45,
    backgroundColor: "transparent",
  },
  genreGradient: {
    position: "absolute",
    bottom: 0,
    top: 1,
    left: 0,
    right: 0,
    height: height * 0.45,
  },
  genreLoaderCard: {
    width: width * 0.9,
    alignSelf: "center",
    height: height * 0.06,
    borderRadius: 8,
    marginTop: 10,
  },
  rowMusicItemTitle: {
    fontSize: 11,
    maxWidth: width * 0.4,
    lineHeight: 15,
    marginTop: 10,
  },
  rowMusicIListContainer: {
    borderWidth: 1,
    gap: 10,
    borderColor: "white",
  },
  rowCardLoadingContainer: {
    flexDirection: "row",
    gap: 10,
    height: height * 0.2,
  },
  rowCardLoadingItem: {
    borderRadius: 8,
    width: width * 0.6,
    height: height * 0.18,
    marginVertical: 10,
  },
  moreBtn: {
    flexDirection: "row",
    backgroundColor: Colors.Slider.primary,
    gap: 5,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  moreLoadingBtn: {
    height: height * 0.03,
    width: width * 0.2,
    borderRadius: 8,
  },
  rowMusicCardsContainer: {
    minHeight: height * 0.23,
    maxHeight: height * 0.4,
    marginTop: 20,
    paddingTop: 5,
    // borderWidth: 1,
    borderColor: "white",
  },
  pagerHeader: {
    borderBottomWidth: 0.5,
    borderColor: "grey",
    paddingBottom: 10,
    marginHorizontal: 20,
  },
  verticalListContainer: {
    height: height * 0.85,
    marginTop: 10,
    paddingBottom: 60,
    paddingHorizontal: 10,
  },
  headText: { fontSize: 24, fontWeight: "bold", fontFamily: "ExoRegular" },
  descText: { fontSize: 14, fontFamily: "PacifioRegular" },
});
export default Styles;
