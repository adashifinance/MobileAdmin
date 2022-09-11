import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ASaversAgents = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aSaversAgentsView}>
      <View style={styles.rectangleView} />
      <Text style={styles.searchStakersID}>Search stakers ID</Text>
      <Image
        style={styles.vuesaxlinearsearchNormalIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearsearchnormal.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.maroofShittuText}>Maroof Shittu</Text>
          <Text style={styles.stakerID08175107484}>Staker ID: 08175107484</Text>
          <View style={styles.rectangleView3} />
          <Text style={styles.mSText}>MS</Text>
        </View>
        <View style={[styles.groupView1, styles.mt10]}>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
          <Image
            style={styles.vuesaxlineararrowRightIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.maroofShittuText1}>Maroof Shittu</Text>
          <Text style={styles.stakerID081751074841}>
            Staker ID: 08175107484
          </Text>
          <View style={styles.rectangleView6} />
          <Text style={styles.mSText1}>MS</Text>
        </View>
        <View style={[styles.groupView2, styles.mt10]}>
          <View style={styles.rectangleView7} />
          <View style={styles.rectangleView8} />
          <Image
            style={styles.vuesaxlineararrowRightIcon2}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.maroofShittuText2}>Maroof Shittu</Text>
          <Text style={styles.stakerID081751074842}>
            Staker ID: 08175107484
          </Text>
          <View style={styles.rectangleView9} />
          <Text style={styles.mSText2}>MS</Text>
        </View>
        <View style={[styles.groupView3, styles.mt10]}>
          <View style={styles.rectangleView10} />
          <View style={styles.rectangleView11} />
          <Image
            style={styles.vuesaxlineararrowRightIcon3}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.maroofShittuText3}>Maroof Shittu</Text>
          <Text style={styles.stakerID081751074843}>
            Staker ID: 08175107484
          </Text>
          <View style={styles.rectangleView12} />
          <Text style={styles.mSText3}>MS</Text>
        </View>
        <View style={[styles.groupView4, styles.mt10]}>
          <View style={styles.rectangleView13} />
          <View style={styles.rectangleView14} />
          <Image
            style={styles.vuesaxlineararrowRightIcon4}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.maroofShittuText4}>Maroof Shittu</Text>
          <Text style={styles.stakerID081751074844}>
            Staker ID: 08175107484
          </Text>
          <View style={styles.rectangleView15} />
          <Text style={styles.mSText4}>MS</Text>
        </View>
        <View style={[styles.groupView5, styles.mt10]}>
          <View style={styles.rectangleView16} />
          <View style={styles.rectangleView17} />
          <Image
            style={styles.vuesaxlineararrowRightIcon5}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
          <Text style={styles.maroofShittuText5}>Maroof Shittu</Text>
          <Text style={styles.stakerID081751074845}>
            Staker ID: 08175107484
          </Text>
          <View style={styles.rectangleView18} />
          <Text style={styles.mSText5}>MS</Text>
        </View>
        <View style={[styles.groupView6, styles.mt10]}>
          <View style={styles.rectangleView19} />
          <View style={styles.rectangleView20} />
          <Image
            style={styles.vuesaxlineararrowRightIcon6}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright7.png")}
          />
          <Text style={styles.maroofShittuText6}>Maroof Shittu</Text>
          <Text style={styles.stakerID081751074846}>
            Staker ID: 08175107484
          </Text>
          <View style={styles.rectangleView21} />
          <Text style={styles.mSText6}>MS</Text>
        </View>
        <View style={[styles.groupView7, styles.mt10]}>
          <View style={styles.rectangleView22} />
          <View style={styles.rectangleView23} />
          <Image
            style={styles.vuesaxlineararrowRightIcon7}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright7.png")}
          />
          <Text style={styles.maroofShittuText7}>Maroof Shittu</Text>
          <Text style={styles.stakerID081751074847}>
            Staker ID: 08175107484
          </Text>
          <View style={styles.rectangleView24} />
          <Text style={styles.mSText7}>MS</Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-22.png")}
      />
      <View style={styles.groupView8}>
        <View style={styles.rectangleView25} />
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
            onPress={() => navigation.navigate("ASaversAgents")}
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
      <View style={styles.rectangleView26} />
      <View style={styles.rectangleView27} />
      <Image
        style={styles.vuesaxlineararrowRightIcon8}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright9.png")}
      />
      <Image
        style={styles.vuesaxlineararrowRightIcon9}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright9.png")}
      />
      <Text style={styles.filterText}>Filter</Text>
      <Text style={styles.stakersText}>Stakers</Text>
      <View style={styles.rectangleView28} />
      <Image
        style={styles.groupIcon2}
        resizeMode="cover"
        source={require("../assets/group-39.png")}
      />
      <View style={styles.groupView9}>
        <View style={styles.rectangleView29} />
        <Text style={styles.createStakerText}>Create Staker</Text>
      </View>
      <View style={styles.groupView10}>
        <View style={styles.rectangleView30} />
        <Text style={styles.createAgentText}>Create Agent</Text>
      </View>
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
  searchStakersID: {
    position: "absolute",
    top: 134,
    left: 72,
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
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  maroofShittuText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  stakerID08175107484: {
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
  rectangleView3: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36,
  },
  mSText: {
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
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon1: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  maroofShittuText1: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  stakerID081751074841: {
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
  rectangleView6: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36,
  },
  mSText1: {
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
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView8: {
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
  maroofShittuText2: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  stakerID081751074842: {
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
  rectangleView9: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36,
  },
  mSText2: {
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
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView11: {
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
  maroofShittuText3: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  stakerID081751074843: {
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
  rectangleView12: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36,
  },
  mSText3: {
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
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView14: {
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
  maroofShittuText4: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  stakerID081751074844: {
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
  rectangleView15: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36,
  },
  mSText4: {
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
  rectangleView16: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  rectangleView17: {
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
  maroofShittuText5: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  stakerID081751074845: {
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
  rectangleView18: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36,
  },
  mSText5: {
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
  rectangleView19: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 62,
  },
  rectangleView20: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 62,
  },
  vuesaxlineararrowRightIcon6: {
    position: "absolute",
    top: 21.34,
    left: 309,
    width: 20,
    height: 20.33,
  },
  maroofShittuText6: {
    position: "absolute",
    top: 19.31,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    width: 83,
    height: 15.25,
  },
  stakerID081751074846: {
    position: "absolute",
    top: 36.59,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    width: 100,
    height: 11.18,
    opacity: 0.7,
  },
  rectangleView21: {
    position: "absolute",
    top: 13.21,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36.59,
  },
  mSText6: {
    position: "absolute",
    top: 22.36,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
    width: 24,
    height: 19.31,
  },
  groupView6: {
    position: "relative",
    width: 340,
    height: 62,
    flexShrink: 0,
  },
  rectangleView22: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 62,
  },
  rectangleView23: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 62,
  },
  vuesaxlineararrowRightIcon7: {
    position: "absolute",
    top: 21.34,
    left: 309,
    width: 20,
    height: 20.33,
  },
  maroofShittuText7: {
    position: "absolute",
    top: 19.31,
    left: 56,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    width: 83,
    height: 15.25,
  },
  stakerID081751074847: {
    position: "absolute",
    top: 36.59,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    width: 100,
    height: 11.18,
    opacity: 0.7,
  },
  rectangleView24: {
    position: "absolute",
    top: 13.21,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 36,
    height: 36.59,
  },
  mSText7: {
    position: "absolute",
    top: 22.36,
    left: 17,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
    width: 24,
    height: 19.31,
  },
  groupView7: {
    position: "relative",
    width: 340,
    height: 62,
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
  rectangleView25: {
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
  rectangleView26: {
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
  rectangleView27: {
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
  vuesaxlineararrowRightIcon8: {
    position: "absolute",
    top: 185,
    left: 334,
    width: 20,
    height: 20,
  },
  vuesaxlineararrowRightIcon9: {
    position: "absolute",
    top: 185,
    left: 96,
    width: 20,
    height: 20,
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
  stakersText: {
    position: "absolute",
    top: 187,
    left: 34,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
    opacity: 0.7,
  },
  rectangleView28: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#000",
    width: 390,
    height: 842,
    opacity: 0.4,
  },
  groupIcon2: {
    position: "absolute",
    top: 684,
    left: 295,
    width: 70,
    height: 70,
  },
  rectangleView29: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 137,
    height: 60,
  },
  createStakerText: {
    position: "absolute",
    top: 20,
    left: 18,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView9: {
    position: "absolute",
    top: 551,
    left: 228,
    width: 137,
    height: 60,
  },
  rectangleView30: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#83c4f9",
    width: 173,
    height: 60,
  },
  createAgentText: {
    position: "absolute",
    top: 19,
    left: 47,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView10: {
    position: "absolute",
    top: 618,
    left: 192,
    width: 173,
    height: 60,
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

export default ASaversAgents;
