import React from "react";
import MainContainer from "../../container/MainContainer";
import { Flex, HStack, Heading, Icon, Text } from "@chakra-ui/react";
import { BsCart2, BsPerson } from "react-icons/bs";
import Menu from "./menu/Menu";
import SearchBar from "./search/SearchBar";
import Link from "next/link";
import Account from "./account/Account";
import CartDrawer from "./cart/CartDrawer";

const MainHeader = () => {
  return (
    <MainContainer py={2} px={2}>
      <Flex justify="space-between" align="center" pb={3}>
        <HStack>
          <Heading fontSize="2xl" as={Link} href="/">
            Shopping
          </Heading>
        </HStack>
        <HStack align="center">
          <Menu />
        </HStack>
        <HStack spacing={5}>
          <SearchBar />
          <Account />
          <CartDrawer />
        </HStack>
      </Flex>
    </MainContainer>
  );
};

export default MainHeader;
