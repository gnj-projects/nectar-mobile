import { TextStyle } from "react-native";

enum TypographyName {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  p1 = "p1",
  p2 = "p2",
  s = "s"
}

type TypographyType = {
  [x in TypographyName]: TextStyle;
};

const color = {
  primary: "#1FCC79",
  secondary: "#FF6464",
  mainText: "#2E3E5C",
  secondaryText: "#9FA5C0",
  outline: "#D0DBEA",
  form: "#F4F5F7",
  white: "#fff"
};

const font = {
  normal: "Inter_400Regular",
  bold: "Inter_700Bold"
};

type ThemeProps = {
  typography: TypographyType;
  color: {
    [x in keyof typeof color]: string;
  };
  font: {
    [x in keyof typeof font]: string;
  };
};

const typography: TypographyType = {
  h1: {
    fontFamily: font.bold,
    fontWeight: "bold",
    fontSize: 22,
    fontStyle: "normal",
    lineHeight: 32,
    letterSpacing: 0.5
  },
  h2: {
    fontFamily: font.bold,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: 0.5,
    fontSize: 17
  },
  h3: {
    fontFamily: font.bold,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0.5,
    fontSize: 15
  },
  p1: {
    fontFamily: font.normal,
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: 0.5,
    fontSize: 17,
    fontWeight: "500"
  },
  p2: {
    fontFamily: font.normal,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 0.5
  },
  s: {
    fontFamily: font.normal,
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5
  }
};

export const theme: ThemeProps = {
  color,
  typography,
  font
};
