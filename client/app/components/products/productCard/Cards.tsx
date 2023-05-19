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
        <HStack>
          {Array(5)
            .fill("")
            .map((_, i) => {
              const roundedRating = Math.round(3.5 * 2) / 2;
              if (roundedRating - i >= 1) {
                return (
                  <BsStarFill
                    key={i}
                    style={{ marginLeft: "1" }}
                    color={i < 4.2 ? "tomato" : "gray.300"}
                  />
                );
              }
              if (roundedRating - i === 0.5) {
                return (
                  <BsStarHalf
                    color="tomato"
                    key={i}
                    style={{ marginLeft: "1" }}
                  />
                );
              }
              return (
                <BsStar color="tomato" key={i} style={{ marginLeft: "1" }} />
              );
            })}
          <Text fontSize="md" fontWeight="bold">
            (12)
          </Text>
        </HStack>
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
