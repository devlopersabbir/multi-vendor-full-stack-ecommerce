import React from "react";
import MainContainer from "../../container/MainContainer";
import { Flex, HStack, Heading, Image, Stack } from "@chakra-ui/react";
import Headings from "../../common/Headings";

const TopCategory = () => {
  return (
    <MainContainer px={2}>
      <Headings text="Shop Our Top Categories" />
      <HStack mt={8} gap={3} flexDir="row">
        {[0, 1, 2, 3, 4, 5].map((_, i) => (
          <Flex
            cursor="pointer"
            rounded="2xl"
            key={i}
            h="60"
            w="full"
            overflow="hidden"
            justify="space-around"
            pos="relative"
            p={5}
          >
            <Image
              pos="absolute"
              top={0}
              alt="category image"
              w="full"
              h="full"
              transition="transform 0.2s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
              src="category/books.png"
            />
            <Heading
              zIndex={9}
              h="8"
              fontWeight="semibold"
              color="white"
              fontSize="2xl"
            >
              Books
            </Heading>
          </Flex>
        ))}
      </HStack>
    </MainContainer>
  );
};

export default TopCategory;
