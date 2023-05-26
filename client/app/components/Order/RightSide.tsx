import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";

const RightSide = () => {
  const { colorMode } = useColorMode();
  const [paymentMethod, setPaymentMethod] =
    useState<string>("cash-on-delivery");
  return (
    <Box
      w="full"
      h="full"
      flex={3}
      p={5}
      border="2px"
      borderColor="gray.100"
      rounded="lg"
      shadow="sm"
    >
      <Stack gap={3}>
        <Heading fontSize="4xl" fontWeight="bold">
          Order Summery
        </Heading>
        <Divider />
        <InputGroup w="full">
          <Input
            variant="unstyled"
            bg={colorMode === "dark" ? "gray.900" : "gray.100"}
            py={3}
            px={4}
            color={colorMode === "dark" ? "white" : "black"}
            fontWeight="semibold"
            rounded="full"
            placeholder="apply cuopon code"
            type="text"
          />
          <InputRightElement h="full" w="38%">
            <Button
              rounded="full"
              fontSize="lg"
              bg="primary"
              _hover={{ bg: "green.800", color: "white" }}
              color="white"
              fontWeight="semibold"
            >
              Apply cuopon
            </Button>
          </InputRightElement>
        </InputGroup>
        <Divider />
        <Heading fontWeight="semibold" fontSize="xl">
          Payment details
        </Heading>
        <Divider />
        {/* Radio */}
        <RadioGroup
          fontWeight="medium"
          onChange={setPaymentMethod}
          value={paymentMethod}
        >
          <Stack direction="column">
            <Radio value="cash-on-delivery">Cash on delivery</Radio>
            <Radio value="1">Paypal</Radio>
            <Radio value="2">Creadid or Dabit Cart</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </Box>
  );
};

export default RightSide;
