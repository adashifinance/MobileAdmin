import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ADActivites = () => {
  return (
    <View style={styles.aDActivitesView}>
      <View style={styles.rectangleView} />
      <View style={styles.groupView1}>
        <View style={styles.rectangleView1} />
        <View style={styles.groupView}>
          <Text style={styles.downloadCSVText}>Download CSV</Text>
        </View>
      </View>
      <View style={styles.rectangleView2} />
      <Image
        style={styles.vuesaxlineararrowRightIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright9.png")}
      />
      <Text style={styles.searchStakersOrAgentsID}>
        Search stakers or agents ID
      </Text>
      <Text style={styles.filterByText}>Filter by</Text>
      <Image
        style={styles.vuesaxlinearsearchNormalIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearsearchnormal.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.groupView2}>
          <View style={styles.rectangleView3} />
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={styles.vuesaxbulkmoneySendIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneysend.png")}
          />
          <Text style={styles.withdrawalText}>Withdrawal</Text>
          <Text style={styles.text}>$21,000.50</Text>
          <Text style={styles.pMText}>2:34PM</Text>
          <Text style={styles.thFeb22}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView3, styles.mt10]}>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
          <Image
            style={styles.vuesaxbulkmoneyReciveIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneyrecive.png")}
          />
          <Text style={styles.stakingsText}>Stakings</Text>
          <Text style={styles.text1}>$21,000.50</Text>
          <Text style={styles.pMText1}>2:34PM</Text>
          <Text style={styles.thFeb221}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView4, styles.mt10]}>
          <View style={styles.rectangleView6} />
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={styles.vuesaxbulkmoneySendIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneysend.png")}
          />
          <Text style={styles.withdrawalText1}>Withdrawal</Text>
          <Text style={styles.text2}>$21,000.50</Text>
          <Text style={styles.pMText2}>2:34PM</Text>
          <Text style={styles.thFeb222}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView5, styles.mt10]}>
          <View style={styles.rectangleView7} />
          <View style={styles.rectangleView8} />
          <Image
            style={styles.vuesaxbulkmoneyReciveIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneyrecive.png")}
          />
          <Text style={styles.stakingsText1}>Stakings</Text>
          <Text style={styles.text3}>$21,000.50</Text>
          <Text style={styles.pMText3}>2:34PM</Text>
          <Text style={styles.thFeb223}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView6, styles.mt10]}>
          <View style={styles.rectangleView9} />
          <Image
            style={styles.rectangleIcon2}
            resizeMode="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={styles.vuesaxbulkmoneySendIcon2}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneysend.png")}
          />
          <Text style={styles.withdrawalText2}>Withdrawal</Text>
          <Text style={styles.text4}>$21,000.50</Text>
          <Text style={styles.pMText4}>2:34PM</Text>
          <Text style={styles.thFeb224}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView7, styles.mt10]}>
          <View style={styles.rectangleView10} />
          <View style={styles.rectangleView11} />
          <Image
            style={styles.vuesaxbulkmoneyReciveIcon2}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneyrecive.png")}
          />
          <Text style={styles.stakingsText2}>Stakings</Text>
          <Text style={styles.text5}>$21,000.50</Text>
          <Text style={styles.pMText5}>2:34PM</Text>
          <Text style={styles.thFeb225}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView8, styles.mt10]}>
          <View style={styles.rectangleView12} />
          <Image
            style={styles.rectangleIcon3}
            resizeMode="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={styles.vuesaxbulkmoneySendIcon3}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneysend.png")}
          />
          <Text style={styles.withdrawalText3}>Withdrawal</Text>
          <Text style={styles.text6}>$21,000.50</Text>
          <Text style={styles.pMText6}>2:34PM</Text>
          <Text style={styles.thFeb226}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView9, styles.mt10]}>
          <View style={styles.rectangleView13} />
          <View style={styles.rectangleView14} />
          <Image
            style={styles.vuesaxbulkmoneyReciveIcon3}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmoneyrecive.png")}
          />
          <Text style={styles.stakingsText3}>Stakings</Text>
          <Text style={styles.text7}>$21,000.50</Text>
          <Text style={styles.pMText7}>2:34PM</Text>
          <Text style={styles.thFeb227}>6th Feb ‘22</Text>
        </View>
      </View>
      <View style={styles.groupView10}>
        <View style={styles.rectangleView15} />
        <View style={styles.frameView5}>
          <View style={styles.frameView1}>
            <Image
              style={styles.vuesaxlinearcategoryIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearcategory.png")}
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
              source={require("../assets/vuesaxlinearreceipt22.png")}
            />
            <Text style={[styles.activitiesText, styles.mt4]}>Activities</Text>
          </View>
          <View style={[styles.frameView4, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsetting2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsetting22.png")}
            />
            <Text style={[styles.settingsText, styles.mt4]}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.logoView}>
        <View style={styles.frameView6}>
          <Image
            style={styles.rectangleIcon4}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Text style={[styles.cynthiaKennethText, styles.ml10]}>
            Cynthia Kenneth
          </Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
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
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#127dd3",
    width: 125,
    height: 34,
  },
  downloadCSVText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 81,
  },
  groupView: {
    position: "absolute",
    top: 10,
    left: 22,
    width: 81,
    height: 14,
  },
  groupView1: {
    position: "absolute",
    top: 188,
    left: 240,
    width: 125,
    height: 34,
  },
  rectangleView2: {
    position: "absolute",
    top: 188,
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
    top: 195,
    left: 96,
    width: 20,
    height: 20,
  },
  searchStakersOrAgentsID: {
    position: "absolute",
    top: 134,
    left: 67,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
    opacity: 0.7,
  },
  filterByText: {
    position: "absolute",
    top: 197,
    left: 32,
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
    height: 64,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneySendIcon: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  withdrawalText: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb22: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView2: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneyReciveIcon: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  stakingsText: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText1: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb221: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView3: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneySendIcon1: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  withdrawalText1: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText2: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb222: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView4: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneyReciveIcon1: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  stakingsText1: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText3: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb223: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView5: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneySendIcon2: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  withdrawalText2: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText4: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb224: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView6: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneyReciveIcon2: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  stakingsText2: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText5: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb225: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView7: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneySendIcon3: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  withdrawalText3: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText6: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb226: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView8: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 60,
    height: 64,
  },
  vuesaxbulkmoneyReciveIcon3: {
    position: "absolute",
    top: 14,
    left: 11,
    width: 37,
    height: 37,
  },
  stakingsText3: {
    position: "absolute",
    top: 16,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  pMText7: {
    position: "absolute",
    top: 36,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb227: {
    position: "absolute",
    top: 36,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView9: {
    position: "relative",
    width: 340,
    height: 64,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 240,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView15: {
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
    color: "#127dd3",
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
  groupView10: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  rectangleIcon4: {
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
  frameView6: {
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
  groupIcon: {
    position: "absolute",
    top: 32,
    left: 318,
    width: 47,
    height: 48,
  },
  aDActivitesView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ADActivites;
