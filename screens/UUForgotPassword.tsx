import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UUForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.uUForgotPassword}>
      <Text style={styles.forgotPasswordText}>Forgot password</Text>
      <Text style={styles.fillTheFormToRetrieveAcco}>
        Fill the form to retrieve account
      </Text>
      <View style={styles.emailphoneInputView}>
        <Text style={styles.emailPhoneNumberText}>Email/Phone Number</Text>
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.submitText}>Submit</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright.png")}
        />
      </View>
      <Pressable
        style={styles.rememberYourDetailsLogIn1}
        onPress={() => navigation.navigate("UULogin")}
      >
        <Text style={styles.rememberYourDetailsLogIn}>
          Remember your details? Log In
        </Text>
      </Pressable>
      <Pressable
        style={styles.backPressable}
        onPress={() => navigation.navigate("UULogin")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordText: {
    position: "absolute",
    top: 134,
    left: 74,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "center",
  },
  fillTheFormToRetrieveAcco: {
    position: "absolute",
    top: 179,
    left: 94,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 202,
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
    position: "absolute",
    top: 242,
    left: 25,
    width: 340,
    height: 71,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  submitText: {
    position: "absolute",
    top: 15,
    left: 85,
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
    top: 357,
    left: 25,
    width: 340,
    height: 48,
  },
  rememberYourDetailsLogIn: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  rememberYourDetailsLogIn1: {
    position: "absolute",
    left: 83,
    top: 449,
  },
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
  uUForgotPassword: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUForgotPassword;
