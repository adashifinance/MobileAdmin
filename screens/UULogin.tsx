import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UULogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.uULoginView}>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.frameView}>
        <View style={styles.emailphoneInputView}>
          <Text style={styles.emailPhoneNumberText}>Email/Phone Number</Text>
          <View style={styles.rectangleView} />
        </View>
        <View style={[styles.passwordInputView, styles.mt16]}>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineareyeIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineareye.png")}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.logInText}>Log In</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright.png")}
        />
      </View>
      <Pressable
        style={styles.forgotPasswordPressable}
        onPress={() => navigation.navigate("UUForgotPassword")}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  loginText: {
    position: "absolute",
    top: 150,
    left: 154,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "center",
  },
  emailPhoneNumberText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1.6,
    width: 340,
    height: 48,
  },
  emailphoneInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  passwordText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  vuesaxlineareyeIcon: {
    position: "absolute",
    top: 35,
    left: 305,
    width: 24,
    height: 24,
  },
  passwordInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 227,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  logInText: {
    position: "absolute",
    top: 15,
    left: 84,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
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
  btnView: {
    position: "absolute",
    top: 429,
    left: 25,
    width: 340,
    height: 48,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  forgotPasswordPressable: {
    position: "absolute",
    left: 130,
    top: 521,
  },
  aDASHIFiSquareTrans2Icon: {
    position: "absolute",
    top: 35,
    left: 139,
    width: 111,
    height: 49,
  },
  uULoginView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UULogin;
