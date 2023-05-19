import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../container/MainContainer";

const BackBanner = () => {
  return (
    <Box
      my={14}
      h="90vh"
      backgroundImage="banner/2.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bgPosition="center"
      pos="relative"
      overflow="hidden"
    >
      <MainContainer px={2}>
        <Flex align="center" h="90vh" justify="end">
          <Stack p={16} bg="primary" color="white" w="40%" align="flex-start">
            <Heading fontSize="5xl">Get 5% Cash Back On $200</Heading>
            <Text fontSize="md" fontWeight="normal">
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Text>
            <Box>
              <Button
                color="white"
                variant="outline"
                rounded="full"
                fontSize="lg"
                fontWeight="600"
                mt={4}
                size="lg"
                _hover={{ bg: "black", borderColor: "black" }}
              >
                Learn More
              </Button>
            </Box>
          </Stack>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default BackBanner;
