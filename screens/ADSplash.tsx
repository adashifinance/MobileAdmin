import * as React from "react";
import { StyleSheet, View } from "react-native";

const ADSplash = () => {
  return <View style={styles.aDSplashView} />;
};

const styles = StyleSheet.create({
  aDSplashView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ADSplash;
