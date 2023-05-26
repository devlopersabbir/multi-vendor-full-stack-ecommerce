"use client";

import MainContainer from "../components/container/MainContainer";
import { Flex } from "@chakra-ui/react";
import RightSide from "../components/Order/RightSide";
import LeftSide from "../components/Order/LeftSide";

const OrderPage = () => {
  return (
    <MainContainer px={2} my={8}>
      <Flex gap={5} flex={1}>
        <LeftSide />
        <RightSide />
      </Flex>
    </MainContainer>
  );
};

export default OrderPage;
