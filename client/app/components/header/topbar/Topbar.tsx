import { Container, Flex, HStack, Icon, Select, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";

const Topbar = () => {
  return (
    <Container maxW="container.xl" mx="auto" px="2">
      <Flex justifyContent="space-between">
        <HStack>
          <Icon as={BsTelephoneFill} />
          <Text>+88016XXXXXXXXXX</Text>
        </HStack>
        <HStack>
          <Text>GET 50% OFF on selected Items | </Text>
          <Link href="/shop">Shop now</Link>
        </HStack>
        <HStack>
          <Select placeholder="Language" variant="unstyled" px="0">
            <option value="en">Eng</option>
            <option value="bn">Bng</option>
          </Select>
          <Select placeholder="Location" variant="unstyled" w="full">
            <option value="bangladesh">Bangladesh</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </Select>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Topbar;
