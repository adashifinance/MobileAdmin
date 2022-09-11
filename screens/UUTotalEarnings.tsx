import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUTotalEarnings = () => {
  return (
    <View style={styles.uUTotalEarnings}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.totalAgentsText}>Total Agents</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-76.png")}
      />
      <Text style={styles.text}>0</Text>
      <View style={styles.frameView}>
        <Text style={styles.janText}>Jan</Text>
        <Text style={[styles.febText, styles.ml11]}>Feb</Text>
        <Text style={[styles.marText, styles.ml11]}>Mar</Text>
        <Text style={[styles.aprText, styles.ml11]}>Apr</Text>
        <Text style={[styles.mayText, styles.ml11]}>May</Text>
        <Text style={[styles.junText, styles.ml11]}>Jun</Text>
        <Text style={[styles.julText, styles.ml11]}>Jul</Text>
        <Text style={[styles.augText, styles.ml11]}>Aug</Text>
        <Text style={[styles.sepText, styles.ml11]}>Sep</Text>
        <Text style={[styles.octText, styles.ml11]}>Oct</Text>
        <Text style={[styles.novText, styles.ml11]}>Nov</Text>
        <Text style={[styles.decText, styles.ml11]}>Dec</Text>
      </View>
      <Text style={styles.text1}>100,000</Text>
      <Text style={styles.text2}>300,000</Text>
      <Text style={styles.text3}>500,000</Text>
      <Text style={styles.text4}>700,000</Text>
      <Text style={styles.text5}>900,000</Text>
      <View style={styles.lineView} />
      <View style={styles.lineView1} />
      <View style={styles.lineView2} />
      <View style={styles.lineView3} />
      <View style={styles.lineView4} />
      <View style={styles.lineView5} />
      <View style={styles.lineView6} />
      <View style={styles.lineView7} />
      <View style={styles.lineView8} />
      <View style={styles.lineView9} />
      <View style={styles.lineView10} />
      <View style={styles.lineView11} />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon3}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon4}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon5}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon6}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon7}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon8}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon9}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon10}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <Image
        style={styles.ellipseIcon11}
        resizeMode="cover"
        source={require("../assets/ellipse-56.png")}
      />
      <View style={styles.groupView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.monthText}>Month</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright21.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml11: {
    marginLeft: 11,
  },
  rectangleView: {
    position: "absolute",
    top: 32,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 47,
    height: 48,
  },
  vuesaxlineararrowLeftIcon: {
    position: "absolute",
    height: "2.84%",
    width: "6.15%",
    top: "5.21%",
    right: "84.36%",
    bottom: "91.94%",
    left: "9.49%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  totalAgentsText: {
    position: "absolute",
    top: 46,
    left: 143,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupIcon: {
    position: "absolute",
    top: 177,
    left: 61,
    width: 304,
    height: 170,
  },
  text: {
    position: "absolute",
    top: 319,
    left: 51,
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  janText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  febText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  marText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  aprText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  mayText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  junText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  julText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  augText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  sepText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  octText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  novText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  decText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    top: 352,
    left: 75,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1: {
    position: "absolute",
    top: 299,
    left: 27,
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    top: 269,
    left: 27,
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    top: 239,
    left: 27,
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    top: 209,
    left: 27,
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  text5: {
    position: "absolute",
    top: 179,
    left: 27,
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#c1d0d6",
    textAlign: "center",
  },
  lineView: {
    position: "absolute",
    top: 176.8,
    left: 82.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView1: {
    position: "absolute",
    top: 176.8,
    left: 106.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView2: {
    position: "absolute",
    top: 176.8,
    left: 131.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView3: {
    position: "absolute",
    top: 176.8,
    left: 156.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView4: {
    position: "absolute",
    top: 176.8,
    left: 182.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView5: {
    position: "absolute",
    top: 176.8,
    left: 208.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView6: {
    position: "absolute",
    top: 176.8,
    left: 233.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView7: {
    position: "absolute",
    top: 176.8,
    left: 257.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView8: {
    position: "absolute",
    top: 176.8,
    left: 281.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView9: {
    position: "absolute",
    top: 176.8,
    left: 305.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView10: {
    position: "absolute",
    top: 176.8,
    left: 330.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 170.4,
  },
  lineView11: {
    position: "absolute",
    top: 209.8,
    left: 356.8,
    borderStyle: "solid",
    borderColor: "#e6eff3",
    borderRightWidth: 0.4,
    width: 0.4,
    height: 137.4,
  },
  vectorIcon: {
    position: "absolute",
    top: 181.23,
    left: 82.5,
    width: 275,
    height: 149.27,
  },
  vectorIcon1: {
    position: "absolute",
    top: 182,
    left: 83,
    width: 274,
    height: 165,
  },
  ellipseIcon: {
    position: "absolute",
    top: 324,
    left: 80,
    width: 7,
    height: 7,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 276,
    left: 103,
    width: 7,
    height: 7,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 287,
    left: 129,
    width: 7,
    height: 7,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 230,
    left: 153,
    width: 7,
    height: 7,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 235,
    left: 179,
    width: 7,
    height: 7,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 203,
    left: 205,
    width: 7,
    height: 7,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 203,
    left: 230,
    width: 7,
    height: 7,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 269,
    left: 255,
    width: 7,
    height: 7,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 219,
    left: 279,
    width: 7,
    height: 7,
  },
  ellipseIcon9: {
    position: "absolute",
    top: 208,
    left: 303,
    width: 7,
    height: 7,
  },
  ellipseIcon10: {
    position: "absolute",
    top: 178,
    left: 327,
    width: 7,
    height: 7,
  },
  ellipseIcon11: {
    position: "absolute",
    top: 206,
    left: 353,
    width: 7,
    height: 7,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#e6eff3",
    width: 90,
    height: 31,
  },
  monthText: {
    position: "absolute",
    top: 8,
    left: 8,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 10,
    left: 70,
    width: 11,
    height: 11,
  },
  groupView: {
    position: "absolute",
    top: 86,
    left: 275,
    width: 90,
    height: 31,
  },
  uUTotalEarnings: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUTotalEarnings;
