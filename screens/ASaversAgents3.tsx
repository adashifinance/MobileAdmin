import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ASaversAgents3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aSaversAgentsView}>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <Image
        style={styles.vuesaxlineararrowRightIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright9.png")}
      />
      <Image
        style={styles.vuesaxlineararrowRightIcon1}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright9.png")}
      />
      <Text style={styles.searchAgentsID}>Search agents ID</Text>
      <Text style={styles.filterText}>Filter</Text>
      <Text style={styles.agentsText}>Agents</Text>
      <Image
        style={styles.vuesaxlinearsearchNormalIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearsearchnormal.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
          <Image
            style={styles.vuesaxlineararrowRightIcon2}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText}>James Madagri</Text>
          <Text style={styles.agentID0803473295}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView5} />
          <Text style={styles.jMText}>JM</Text>
        </View>
        <View style={[styles.groupView1, styles.mt10]}>
          <View style={styles.rectangleView6} />
          <View style={styles.rectangleView7} />
          <Image
            style={styles.vuesaxlineararrowRightIcon3}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText1}>James Madagri</Text>
          <Text style={styles.agentID08034732951}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView8} />
          <Text style={styles.jMText1}>JM</Text>
        </View>
        <View style={[styles.groupView2, styles.mt10]}>
          <View style={styles.rectangleView9} />
          <View style={styles.rectangleView10} />
          <Image
            style={styles.vuesaxlineararrowRightIcon4}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText2}>James Madagri</Text>
          <Text style={styles.agentID08034732952}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView11} />
          <Text style={styles.jMText2}>JM</Text>
        </View>
        <View style={[styles.groupView3, styles.mt10]}>
          <View style={styles.rectangleView12} />
          <View style={styles.rectangleView13} />
          <Image
            style={styles.vuesaxlineararrowRightIcon5}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText3}>James Madagri</Text>
          <Text style={styles.agentID08034732953}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView14} />
          <Text style={styles.jMText3}>JM</Text>
        </View>
        <View style={[styles.groupView4, styles.mt10]}>
          <View style={styles.rectangleView15} />
          <View style={styles.rectangleView16} />
          <Image
            style={styles.vuesaxlineararrowRightIcon6}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText4}>James Madagri</Text>
          <Text style={styles.agentID08034732954}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView17} />
          <Text style={styles.jMText4}>JM</Text>
        </View>
        <View style={[styles.groupView5, styles.mt10]}>
          <View style={styles.rectangleView18} />
          <View style={styles.rectangleView19} />
          <Image
            style={styles.vuesaxlineararrowRightIcon7}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText5}>James Madagri</Text>
          <Text style={styles.agentID08034732955}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView20} />
          <Text style={styles.jMText5}>JM</Text>
        </View>
        <View style={[styles.groupView6, styles.mt10]}>
          <View style={styles.rectangleView21} />
          <View style={styles.rectangleView22} />
          <Image
            style={styles.vuesaxlineararrowRightIcon8}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText6}>James Madagri</Text>
          <Text style={styles.agentID08034732956}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView23} />
          <Text style={styles.jMText6}>JM</Text>
        </View>
        <View style={[styles.groupView7, styles.mt10]}>
          <View style={styles.rectangleView24} />
          <View style={styles.rectangleView25} />
          <Image
            style={styles.vuesaxlineararrowRightIcon9}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.jamesMadagriText7}>James Madagri</Text>
          <Text style={styles.agentID08034732957}>Agent ID: 0803473295</Text>
          <View style={styles.rectangleView26} />
          <Text style={styles.jMText7}>JM</Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-22.png")}
      />
      <View style={styles.groupView8}>
        <View style={styles.rectangleView27} />
        <View style={styles.frameView4}>
          <View style={styles.frameView1}>
            <Image
              style={styles.vuesaxlinearcategoryIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearcategory.png")}
            />
            <Text style={[styles.dashboardText, styles.mt4]}>Dashboard</Text>
          </View>
          <Pressable
            style={[styles.framePressable, styles.ml40]}
            onPress={() => navigation.navigate("ASaversAgents3")}
          >
            <Image
              style={styles.vuesaxlinearprofile2userIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearprofile2user.png")}
            />
            <Text style={[styles.stakersAgentsText, styles.mt4]}>
              Stakers/Agents
            </Text>
          </Pressable>
          <View style={[styles.frameView2, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearreceipt2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearreceipt2.png")}
            />
            <Text style={[styles.activitiesText, styles.mt4]}>Activities</Text>
          </View>
          <View style={[styles.frameView3, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsetting2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsetting2.png")}
            />
            <Text style={[styles.settingsText, styles.mt4]}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.logoView}>
        <View style={styles.frameView5}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Text style={[styles.cynthiaKennethText, styles.ml10]}>
            Cynthia Kenneth
          </Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  mt4: {
    marginTop: 4,
  },
  ml40: {
    marginLeft: 40,
  },
  ml10: {
    marginLeft: 10,
  },
  rectangleView: {
    position: "absolute",
    top: 117,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  rectangleView1: {
    position: "absolute",
    top: 178,
    left: 263,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 102,
    height: 34,
  },
  rectangleView2: {
    position: "absolute",
    top: 178,
    left: 25,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 102,
    height: 34,
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 185,
    left: 334,
    width: 20,
    height: 20,
  },
  vuesaxlineararrowRightIcon1: {
    position: "absolute",
    top: 185,
    left: 96,
    width: 20,
    height: 20,
  },
  searchAgentsID: {
    position: "absolute",
    top: 134,
    left: 72,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
    opacity: 0.7,
  },
  filterText: {
    position: "absolute",
    top: 187,
    left: 279,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
    opacity: 0.7,
  },
  agentsText: {
    position: "absolute",
    top: 187,
    left: 35,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
    opacity: 0.7,
  },
  vuesaxlinearsearchNormalIcon: {
    position: "absolute",
    top: 129,
    left: 35,
    width: 24,
    height: 24,
    opacity: 0.7,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon2: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID0803473295: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView5: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon3: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText1: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID08034732951: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView8: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText1: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon4: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText2: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID08034732952: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView11: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText2: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView2: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon5: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText3: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID08034732953: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView14: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText3: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView3: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView15: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView16: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon6: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText4: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID08034732954: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView17: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText4: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView4: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView18: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView19: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon7: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText5: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID08034732955: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView20: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText5: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView5: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView21: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView22: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon8: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText6: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID08034732956: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView23: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText6: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView6: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView24: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView25: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon9: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  jamesMadagriText7: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  agentID08034732957: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView26: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 36,
    height: 36,
  },
  jMText7: {
    position: "absolute",
    top: 22,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView7: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 230,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon: {
    position: "absolute",
    top: 684,
    left: 295,
    width: 70,
    height: 70,
  },
  rectangleView27: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 390,
    height: 73,
  },
  vuesaxlinearcategoryIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  dashboardText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearprofile2userIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  stakersAgentsText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
  },
  framePressable: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearreceipt2Icon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  activitiesText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearsetting2Icon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  settingsText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView3: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView4: {
    position: "absolute",
    top: 17,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView8: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  rectangleIcon: {
    position: "relative",
    borderRadius: 10,
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  cynthiaKennethText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
  },
  frameView5: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoView: {
    position: "absolute",
    top: 32,
    left: 25,
    width: 182,
    height: 48,
  },
  groupIcon1: {
    position: "absolute",
    top: 32,
    left: 318,
    width: 47,
    height: 48,
  },
  aSaversAgentsView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ASaversAgents3;
