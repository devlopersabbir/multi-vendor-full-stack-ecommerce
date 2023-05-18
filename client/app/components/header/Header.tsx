import React from "react";
import Topbar from "./topbar/Topbar";
import MainHeader from "./main/MainHeader";
import { VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <VStack>
      <Topbar />
      <MainHeader />
    </VStack>
  );
};

export default Header;
