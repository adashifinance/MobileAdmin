import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aResetPassword}>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("UUForgotPassword")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
      />
      <Pressable
        style={styles.btnPressable}
        onPress={() => navigation.navigate("UULogin")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.backToLogIn}>Back to Log in</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright.png")}
        />
      </Pressable>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView1} />
        <View style={styles.groupView}>
          <Text style={styles.checkEmailForNewDetails}>
            Check email for new details
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 47,
    height: 48,
  },
  backPressable: {
    position: "absolute",
    left: 25,
    top: 32,
  },
  aDASHIFiSquareTrans2Icon: {
    position: "absolute",
    top: 35,
    left: 139,
    width: 111,
    height: 49,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  backToLogIn: {
    position: "absolute",
    top: 15,
    left: 85,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "center",
    width: 171,
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 12,
    left: 305,
    width: 24,
    height: 24,
  },
  btnPressable: {
    position: "absolute",
    top: 319,
    left: 25,
    width: 340,
    height: 48,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 141,
  },
  checkEmailForNewDetails: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 212,
  },
  groupView: {
    position: "absolute",
    top: 63,
    left: 64,
    width: 212,
    height: 16,
  },
  groupView1: {
    position: "absolute",
    top: 134,
    left: 25,
    width: 340,
    height: 141,
  },
  aResetPassword: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AResetPassword;
