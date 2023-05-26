"use client";

import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { Toaster } from "react-hot-toast";

interface IAuthLayout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayout) => {
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
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode="light" />
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
