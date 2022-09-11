import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";

type BtnType = {
  style?: StyleProp<ViewStyle>;
};

const Btn = ({ style }: BtnType) => {
  return (
    <View style={[styles.btnView, style]}>
      <View style={styles.rectangleView} />
      <Text style={styles.confirmText}>Confirm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView: {
    position: "relative",
    width: 282,
    height: 91,
  },
});

export default Btn;
