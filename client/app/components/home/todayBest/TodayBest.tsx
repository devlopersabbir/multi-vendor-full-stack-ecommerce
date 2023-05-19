import React from "react";
import MainContainer from "../../container/MainContainer";
import { Heading, Stack } from "@chakra-ui/react";
import Product from "../../products/productCard/Product";

const TodayBest = () => {
  return (
    <MainContainer px={2} my={14}>
      <Heading fontSize="2xl" fontWeight="bold" color="black">
        Shop Our Top Categories
      </Heading>
      <Stack mt={8} w="full">
        <Product />
      </Stack>
    </MainContainer>
  );
};

export default TodayBest;
