const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UUSplash from "./screens/UUSplash";
import UUDepositWithCards from "./screens/UUDepositWithCards";
import ASaversAgents from "./screens/ASaversAgents";
import ASaversAgents1 from "./screens/ASaversAgents1";
import UUTotalEarnings from "./screens/UUTotalEarnings";
import UUTotalSavings from "./screens/UUTotalSavings";
import UUTotalTransactions from "./screens/UUTotalTransactions";
import UUTotalBalance from "./screens/UUTotalBalance";
import UUTransactionsDetails from "./screens/UUTransactionsDetails";
import ADActivites from "./screens/ADActivites";
import ACreateSaver from "./screens/ACreateSaver";
import ACreateSaver1 from "./screens/ACreateSaver1";
import ASaversAgents2 from "./screens/ASaversAgents2";
import ASaversAgents3 from "./screens/ASaversAgents3";
import UUWithdraw from "./screens/UUWithdraw";
import UUWithdraw1 from "./screens/UUWithdraw1";
import UUWithdraw2 from "./screens/UUWithdraw2";
import UUDepositBank from "./screens/UUDepositBank";
import UUDeposit from "./screens/UUDeposit";
import ADDashboard from "./screens/ADDashboard";
import AResetPassword from "./screens/AResetPassword";
import UUForgotPassword from "./screens/UUForgotPassword";
import UULogin from "./screens/UULogin";
import ADSplash from "./screens/ADSplash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="UUSplash"
              component={UUSplash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDepositWithCards"
              component={UUDepositWithCards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ASaversAgents"
              component={ASaversAgents}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ASaversAgents1"
              component={ASaversAgents1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTotalEarnings"
              component={UUTotalEarnings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTotalSavings"
              component={UUTotalSavings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTotalTransactions"
              component={UUTotalTransactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTotalBalance"
              component={UUTotalBalance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails"
              component={UUTransactionsDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ADActivites"
              component={ADActivites}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ACreateSaver"
              component={ACreateSaver}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ACreateSaver1"
              component={ACreateSaver1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ASaversAgents2"
              component={ASaversAgents2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ASaversAgents3"
              component={ASaversAgents3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUWithdraw"
              component={UUWithdraw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUWithdraw1"
              component={UUWithdraw1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUWithdraw2"
              component={UUWithdraw2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDepositBank"
              component={UUDepositBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDeposit"
              component={UUDeposit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ADDashboard"
              component={ADDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AResetPassword"
              component={AResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUForgotPassword"
              component={UUForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UULogin"
              component={UULogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ADSplash"
              component={ADSplash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
