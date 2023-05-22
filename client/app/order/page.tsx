"use client";
import React from "react";
import MainContainer from "../components/container/MainContainer";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Headings from "../components/common/Headings";

const OrderPage = () => {
  return (
    <MainContainer px={2} my={8}>
      <Flex flex={1}>
        <Box w="full" h="auto" flex={6} p={5}>
          <Text>Fuck left</Text>
        </Box>
        <Box w="full" h="auto" flex={3} p={5}>
          <Stack gap={3}>
            <Heading fontSize="4xl" fontWeight="bold">
              Order Summery
            </Heading>
            <Divider />
            <InputGroup>
              <Input placeholder="apply cuopon code" type="text" />
              <InputRightElement>
                <Button>Apply cuopon</Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Box>
      </Flex>
    </MainContainer>
  );
};

export default OrderPage;
