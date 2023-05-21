import {
  Button,
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Rating from "../../common/Rating";

const Cards = () => {
  return (
    <Card shadow="md" rounded="lg" p={3} cursor="pointer">
      <Flex overflow="hidden" rounded="lg">
        <Image
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: "scale(1.2)" }}
          src="products/1.png"
          w="full"
          h="full"
          alt="product 1"
        />
      </Flex>
      <VStack py={2} align="flex-start">
        <HStack pt={2} justify="space-between" w="full">
          <Heading
            textTransform="capitalize"
            fontSize="xl"
            fontWeight="semibold"
            as="h2"
          >
            product title{" "}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" color="icons">
            $232
          </Text>
        </HStack>
        <Text textAlign="left" fontSize="md" fontWeight="light">
          short description
        </Text>
        <Rating />
        <Button
          rounded="full"
          borderColor="primary"
          _hover={{ backgroundColor: "primary", color: "white" }}
          variant="outline"
        >
          Add to Card
        </Button>
      </VStack>
    </Card>
  );
};

export default Cards;
