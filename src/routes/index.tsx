import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "@screens/onboarding";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainStackParamList } from "./types";

const MainStackRouter = createNativeStackNavigator<MainStackParamList>();

export const Router = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStackRouter.Navigator>
          <MainStackRouter.Group
            screenOptions={{
              headerShown: false
            }}
          >
            <MainStackRouter.Screen name="Onboarding" component={Onboarding} />
          </MainStackRouter.Group>
        </MainStackRouter.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
