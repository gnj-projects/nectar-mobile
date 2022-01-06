import { NectarLogoSVG } from "@assets/icons/nectar-logo";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Onboarding = (): JSX.Element => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../assets/images/onboarding-background.png")}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <NectarLogoSVG width={50} height={60} style={styles.logo} />
          <Text style={styles.largeText}>Welcome {`\n`} to our store</Text>
          <Text style={styles.smallText}>
            Get your groceries in as fast as one hour
          </Text>
          <View>
            <Pressable style={styles.button} accessible={false}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    marginHorizontal: 30,

    justifyContent: "flex-end",
    marginBottom: 90
  },
  contentContainer: {
    alignSelf: "center"
  },
  logo: {
    alignSelf: "center",
    marginBottom: 35
  },
  largeText: {
    fontSize: 48,
    textAlign: "center",
    color: "#fff",
    fontWeight: "600"
  },
  smallText: {
    fontSize: 16,
    color: "#fcfcfc",
    opacity: 0.7,
    marginTop: 19
  },
  button: {
    backgroundColor: "#53B175",
    alignSelf: "center",
    height: 67,
    justifyContent: "center",
    width: "100%",
    maxWidth: "100%",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 40
  },
  buttonText: {
    fontWeight: "600",
    color: "#FFF9FF",
    fontSize: 18
  }
});
