"use client";
import Breadcrumbs from "@/app/components/common/Breadcrumbs";
import Rating from "@/app/components/common/Rating";
import MainContainer from "@/app/components/container/MainContainer";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import ProductPreviewSlider from "../ProductPreviewSlider";

const SingleProduct = () => {
  return (
    <MainContainer px={2} my={10}>
      <Breadcrumbs />
      <Flex w="100%" justifyContent="space-between" flexDir="row" gap={8}>
        <Box w="50%">
          <ProductPreviewSlider />
        </Box>
        <Stack w="50%">
          {/* title and short description */}
          <VStack>
            <Heading>Airpod Max</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              quisquam libero beatae commodi atque eius?
            </Text>
            <Rating numberOfRating={11} rating={2.5} />
          </VStack>
          <Divider my={3} />
          {/* price and message */}
          <VStack>
            <Heading>$553 or 99.99/month</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </Text>
          </VStack>
          {/* product quantity */}
          <HStack>
            <Button>Fuck</Button>
            <Text>
              Only <span style={{ color: "green" }}>12 items</span> left!
              <br /> Don't miss it
            </Text>
          </HStack>
          <HStack>
            <Button
              rounded="full"
              fontSize="lg"
              _hover={{
                backgroundColor: "green",
              }}
              size="lg"
              fontWeight="bold"
              variant="solid"
              color="white"
              bg="primary"
            >
              Buy Now
            </Button>
            <Button
              size="lg"
              fontSize="lg"
              fontWeight="bold"
              rounded="full"
              borderColor="primary"
              _hover={{ backgroundColor: "primary", color: "white" }}
              variant="outline"
            >
              Add to Card
            </Button>
          </HStack>
          <VStack border="2px" boxShadow="sm">
            <Stack>
              <Icon as={MdDeliveryDining} />
              <VStack>
                <Heading>Free Delivery</Heading>
                <Text textDecor="underline">
                  Enter your postal code for free delivery
                </Text>
              </VStack>
            </Stack>
            <Stack>
              <Icon as={MdDeliveryDining} />
              <VStack>
                <Heading>Free Delivery</Heading>
                <Text textDecor="underline">
                  Enter your postal code for free delivery
                </Text>
              </VStack>
            </Stack>
          </VStack>
        </Stack>
      </Flex>
    </MainContainer>
  );
};

export default SingleProduct;
