import React from "react";
import MainContainer from "../../container/MainContainer";
import { Heading, Stack } from "@chakra-ui/react";
import Product from "../../products/productCard/Product";
import Headings from "../../common/Headings";

const TodayBest = () => {
  return (
    <MainContainer px={2} my={14}>
      <Headings text="Todays Best Deals For You!" />
      <Stack mt={8} w="full">
        <Product />
      </Stack>
    </MainContainer>
  );
};

export default TodayBest;
