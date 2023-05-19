import { Box, Button, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../container/MainContainer";

const Hero = () => {
  return (
    <Box w="full" h="auto" bg="bghero">
      <MainContainer>
        <Flex
          w="full"
          flexDir="row"
          justifyContent="space-between"
          align="center"
          px={[2, 4, 24]}
        >
          <VStack w="50%" alignItems="flex-start" spacing={5} pb={3}>
            <Heading
              color="primary"
              fontSize="5xl"
              fontWeight="700"
              textTransform="capitalize"
            >
              grab upto 50% off on selected books
            </Heading>
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
          </VStack>
          <Flex justify="flex-end" w="50%">
            <Image w="72" src="banner/model.png" />
          </Flex>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default Hero;
