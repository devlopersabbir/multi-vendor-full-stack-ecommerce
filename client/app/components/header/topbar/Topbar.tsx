import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  Select,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import MainContainer from "../../container/MainContainer";

const Topbar = () => {
  return (
    <Box bg="primary" w="full">
      <MainContainer py={1}>
        <Flex justifyContent="space-between" color="white">
          <HStack>
            <Icon as={BsTelephoneFill} />
            <Text fontSize="sm">+88016XXXXXXXXXX</Text>
          </HStack>
          <HStack gap={3}>
            <Text fontSize="sm">GET 50% OFF on selected Items</Text>
            <Divider orientation="vertical" />
            <Text fontSize="sm" as={Link} href="/shop">
              Shop now
            </Text>
          </HStack>
          <HStack>
            <Select
              placeholder="Language"
              variant="unstyled"
              px="0"
              fontSize="sm"
              bg="primary"
              color="main"
            >
              <option value="en">Eng</option>
              <option value="bn">Bng</option>
            </Select>
            <Select
              fontSize="sm"
              bg="primary"
              color="main"
              placeholder="Location"
              variant="unstyled"
              w="full"
            >
              <option value="bangladesh">Bangladesh</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </Select>
          </HStack>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default Topbar;
