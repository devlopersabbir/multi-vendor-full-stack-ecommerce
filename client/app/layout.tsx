"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import theme from "./theme/chakra";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import "pure-react-carousel/dist/react-carousel.es.css";

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <html lang="en">
      <head>
        <title>Multi-vendor E-commerce website</title>
        <meta
          name="description"
          content="A powerfull full functionality multi-vendor e-commerce website created by @devlopersabbir"
        />
        <meta
          name="keywords"
          content="ecommerce, website, devlopersabbir, stsabbir, sabbirhossain, multi, multiVendor"
        />
        <meta name="author" content="Sabbir Hossain Shuvo" />
      </head>
      <body style={{ width: "100%", height: "100%" }}>
        <ChakraProvider theme={theme}>
          {/* <Mode /> */}
          <ColorModeScript initialColorMode="light" />
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          {children}
          <Footer />{" "}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
