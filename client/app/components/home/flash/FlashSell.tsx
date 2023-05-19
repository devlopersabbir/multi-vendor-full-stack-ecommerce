import React from "react";
import MainContainer from "../../container/MainContainer";
import Headings from "../../common/Headings";
import { Button, HStack } from "@chakra-ui/react";
import Product from "../../products/productCard/Product";

const FlashSell = () => {
  return (
    <MainContainer px={2}>
      <Headings text="Todays Best Deals For You!" />
      <HStack spacing={3} mb={5} mt={-5}>
        {[0, 1, 2, 3, 4, 5, 6].map((_, i) => (
          <Button
            key={i}
            variant="outline"
            size="lg"
            rounded="full"
            _hover={{ bg: "primary", color: "white" }}
          >
            Category
          </Button>
        ))}
      </HStack>
      <Product />
    </MainContainer>
  );
};

export default FlashSell;
