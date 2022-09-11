import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ADDashboard = () => {
  return (
    <View style={styles.aDDashboardView}>
      <View style={styles.groupView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <Text style={styles.totalBalanceText}>Total Balance</Text>
        <Text style={styles.text}>$2,302,340.00</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-53.png")}
        />
      </View>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-531.png")}
        />
        <Text style={styles.totalTranscationsText}>Total Transcations</Text>
        <Text style={styles.text1}>1,500</Text>
      </View>
      <View style={styles.groupView2}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group-532.png")}
        />
        <Text style={styles.totalEarningsText}>Total Earnings</Text>
        <Text style={styles.text2}>$150,000.05</Text>
      </View>
      <View style={styles.groupView3}>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.groupIcon3}
          resizeMode="cover"
          source={require("../assets/group-533.png")}
        />
        <Text style={styles.totalAgentsText}>Total Agents</Text>
        <Text style={styles.text3}>200</Text>
      </View>
      <View style={styles.logoView}>
        <View style={styles.frameView}>
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Text style={[styles.cynthiaKennethText, styles.ml10]}>
            Cynthia Kenneth
          </Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon4}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Text style={styles.quickActionsText}>Quick Actions</Text>
      <View style={styles.groupView4}>
        <View style={styles.rectangleView3} />
        <Text style={styles.depositText}>Deposit</Text>
      </View>
      <View style={styles.groupView5}>
        <View style={styles.rectangleView4} />
        <Text style={styles.withdrawText}>Withdraw</Text>
      </View>
      <View style={styles.groupView6}>
        <View style={styles.rectangleView5} />
        <View style={styles.frameView5}>
          <View style={styles.frameView1}>
            <Image
              style={styles.vuesaxlinearcategoryIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearcategory5.png")}
            />
            <Text style={[styles.dashboardText, styles.mt4]}>Dashboard</Text>
          </View>
          <View style={[styles.frameView2, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearprofile2userIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearprofile2user2.png")}
            />
            <Text style={[styles.stakersAgentsText, styles.mt4]}>
              Stakers/Agents
            </Text>
          </View>
          <View style={[styles.frameView3, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearreceipt2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearreceipt2.png")}
            />
            <Text style={[styles.activitiesText, styles.mt4]}>Activities</Text>
          </View>
          <View style={[styles.frameView4, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsetting2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsetting2.png")}
            />
            <Text style={[styles.settingsText, styles.mt4]}>Settings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  mt4: {
    marginTop: 4,
  },
  ml40: {
    marginLeft: 40,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    width: 340,
    height: 104,
  },
  totalBalanceText: {
    position: "absolute",
    top: 24,
    left: 22,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 50,
    left: 23,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    top: 28.94,
    left: 246.18,
    width: 92.11,
    height: 57.06,
  },
  groupView: {
    position: "absolute",
    top: 122,
    left: 25,
    width: 340,
    height: 104,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 104,
  },
  groupIcon1: {
    position: "absolute",
    top: 21.94,
    left: 244.18,
    width: 92.11,
    height: 57.06,
  },
  totalTranscationsText: {
    position: "absolute",
    top: 24,
    left: 22,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    top: 51,
    left: 22,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 242,
    left: 25,
    width: 340,
    height: 104,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 104,
  },
  groupIcon2: {
    position: "absolute",
    top: 27.94,
    left: 244.18,
    width: 92.11,
    height: 57.06,
  },
  totalEarningsText: {
    position: "absolute",
    top: 24,
    left: 23,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    top: 54,
    left: 25,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: 362,
    left: 25,
    width: 340,
    height: 104,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 104,
  },
  groupIcon3: {
    position: "absolute",
    top: 26.94,
    left: 244.18,
    width: 92.11,
    height: 57.06,
  },
  totalAgentsText: {
    position: "absolute",
    top: 24,
    left: 26,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    top: 56,
    left: 26,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    top: 482,
    left: 25,
    width: 340,
    height: 104,
  },
  rectangleIcon1: {
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
  frameView: {
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
  groupIcon4: {
    position: "absolute",
    top: 32,
    left: 318,
    width: 47,
    height: 48,
  },
  quickActionsText: {
    position: "absolute",
    top: 632,
    left: 27,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#495371",
    width: 160,
    height: 75,
  },
  depositText: {
    position: "absolute",
    top: 27,
    left: 48,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    top: 658,
    left: 25,
    width: 160,
    height: 75,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f38181",
    width: 160,
    height: 75,
  },
  withdrawText: {
    position: "absolute",
    top: 27,
    left: 39,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView5: {
    position: "absolute",
    top: 658,
    left: 205,
    width: 160,
    height: 75,
  },
  rectangleView5: {
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
    color: "#127dd3",
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
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView2: {
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
  frameView3: {
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
  frameView4: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView5: {
    position: "absolute",
    top: 17,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView6: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  aDDashboardView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ADDashboard;
