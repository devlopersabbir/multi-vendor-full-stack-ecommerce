import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },
  {
    colors: {
      primary: "#013d29", // green color
      secondary: "#ebedec", // gray color
      bghero: "#fcf0e4", // dark white
      background: "#fff", // white color
      main: "#fff", // white
      text: "#000", // black
      icons: "#09ac0c", // light green ba shawla color
      boxShadow: {
        main: "0px 4px 6px rgba(0, 6, 150, 0.05), 0px 10px 15px rgba(0, 6, 150, 0.1)",
      },
      borderRadius: {
        box: "15px",
      },
    },
    sizes: {
      container: {
        sm: "640px",
        md: "768px",
        lg: "1170px",
        xl: "1280px",
      },
    },

    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          fontFamily: "body",
          color: mode("gray.800", "whiteAlpha.900")(props),
          bg: mode("white", "gray.800")(props),
          lineHeight: "base",
        },
      }),
    },
  }
);

export default theme;
