import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter";
import { Router } from "@routes/index";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Router />
      <StatusBar style="light" />
    </>
  );
}
