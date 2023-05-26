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
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import ProductPreviewSlider from "../ProductPreviewSlider";
import { BiCalendarEvent, BiCart, BiMinus, BiPlus } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { BsCart2 } from "react-icons/bs";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [quantityCount, setQuantityCount] = useState<number>(1);
  return (
    <MainContainer px={2} my={10}>
      <Breadcrumbs />
      <Flex w="100%" justifyContent="space-between" flexDir="row" gap={8}>
        <Box w="50%">
          <ProductPreviewSlider />
        </Box>
        <Stack w="50%" align="flex-start" gap={3}>
          {/* title and short description */}
          <VStack align="flex-start">
            <Heading fontSize="4xl" color="gray.800">
              Airpod Max
            </Heading>
            <Text fontSize="md" fontWeight="normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              quisquam libero beatae commodi atque eius?
            </Text>
            <Rating numberOfRating={11} rating={2.5} />
          </VStack>
          <Divider />
          {/* price and message */}
          <VStack align="flex-start">
            <Heading color="gray.800" fontWeight="bold" fontSize="3xl">
              $553 or 99.99/month
            </Heading>
            <Text fontSize="md" fontWeight="normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </VStack>
          {/* choose size */}
          <VStack align="flex-start" gap={1}>
            <Heading color="gray.800" fontWeight="bold" fontSize="3xl">
              Choose a size
            </Heading>
            <HStack>
              <Button border="2px" borderColor="primary" px={1}>
                XL
              </Button>
              <Button border="2px" borderColor="primary" px={1}>
                XXL
              </Button>
              <Button border="2px" borderColor="primary" px={1}>
                LG
              </Button>
              <Button border="2px" borderColor="primary" px={1}>
                L
              </Button>
              <Button border="2px" borderColor="primary" px={1}>
                M
              </Button>
            </HStack>
          </VStack>
          <Divider />
          {/* product quantity */}
          <HStack align="center" spacing={4}>
            <InputGroup w="32" rounded="full">
              <InputLeftElement h="100%">
                <IconButton
                  h="full"
                  variant="ghost"
                  rounded="full"
                  onClick={() => {
                    if (quantityCount <= 1)
                      return toast.error("You can't decriess less then 1!");
                    setQuantityCount(quantityCount - 1);
                  }}
                  icon={<BiMinus size="24px" />}
                  aria-label="decrement"
                />
              </InputLeftElement>
              <Input
                min={1}
                max={20}
                disabled={true}
                type="number"
                onChange={(e: any) => {
                  const value = parseInt(e.target.value);
                  console.log(value);
                  if (value >= 1 && value <= 20) {
                    setQuantityCount(e.target.value);
                  }
                }}
                defaultValue={quantityCount ?? 1}
              />
              <InputRightElement h="100%">
                <IconButton
                  h="full"
                  variant="ghost"
                  rounded="full"
                  onClick={() => {
                    if (quantityCount >= 20)
                      return toast.error("You can't incriess more then 20!");
                    setQuantityCount(quantityCount + 1);
                  }}
                  aria-label="increment"
                  icon={<BiPlus size="24px" />}
                />
              </InputRightElement>
            </InputGroup>
            <Text fontSize="md" fontWeight="normal">
              Only
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" 12 items"}
              </span>
              left! Don't miss it
            </Text>
          </HStack>
          <Divider />
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
              rightIcon={<BsCart2 size="24" />}
            >
              Add to Card
            </Button>
          </HStack>
          <VStack w="full" boxShadow="sm" align="flex-start">
            <HStack
              // w="full"
              border="2px"
              borderColor="gray.100"
              spacing={3}
              p={5}
              rounded="md"
              cursor="pointer"
              shadow="md"
              bg="gray.50"
              align="flex-start"
            >
              <Icon color="tomato" as={TbTruckDelivery} fontSize="3xl" />
              <VStack gap={1} align="flex-start">
                <Heading fontSize="xl" fontWeight="semibold">
                  Free Delivery
                </Heading>
                <Text textDecor="underline" fontSize="md" fontWeight="normal">
                  Enter your postal code for free delivery
                </Text>
              </VStack>
            </HStack>
            <HStack
              // w="full"
              border="2px"
              borderColor="gray.100"
              spacing={3}
              p={5}
              rounded="md"
              cursor="pointer"
              shadow="md"
              bg="gray.50"
              align="flex-start"
            >
              <Icon color="tomato" as={BiCalendarEvent} fontSize="3xl" />
              <VStack gap={1} align="flex-start">
                <Heading fontSize="xl" fontWeight="semibold">
                  Return Delivery
                </Heading>
                <Text textDecor="underline" fontSize="md" fontWeight="normal">
                  Free 30 days delivery return! Details here
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Stack>
      </Flex>
    </MainContainer>
  );
};

export default SingleProduct;
