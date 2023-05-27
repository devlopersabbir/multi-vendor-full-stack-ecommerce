"use client";

import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const page = () => {
  return (
    <Center my={5}>
      <Flex
        direction="row"
        gap={10}
        rounded="lg"
        w="600px"
        h="auto"
        overflow="hidden"
        align="center"
        border="2px"
        borderColor="gray.100"
        p={[3, 7]}
        boxShadow="lg"
      >
        <Image
          rounded="lg"
          w="50%"
          objectFit="cover"
          src="/login/login.jpeg"
          alt="model"
        />
        {/* <Heading>Image here</Heading> */}

        <Stack w="50%" align="flex-start" gap={5}>
          <VStack spacing={0}>
            <Heading fontSize="3xl" fontWeight="semibold">
              Welcome!
            </Heading>
            <Text fontSize="lg" fontWeight="normal" color="gray.600">
              Register your account
            </Text>
          </VStack>
          <VStack>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Your full name</FormLabel>
              <Input
                id="name"
                placeholder="Sabbir Hossain Shuvo"
                type="text"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <Input
                id="email"
                placeholder="devlopersabbir@gmail.comk"
                type="email"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired={false}>
              <FormLabel htmlFor="phone">Phone number (Optional)</FormLabel>
              <Input
                id="phone"
                placeholder="+8801XXXXXXXXX"
                type="number"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired={false}>
              <FormLabel htmlFor="address">Address (Optional)</FormLabel>
              <Input
                id="address"
                placeholder="Danmondi 15, Dhaka Bangladesh"
                type="text"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="*******"
                type="text"
                rounded="md"
              />
            </FormControl>
          </VStack>
        </Stack>
      </Flex>
    </Center>
  );
};

export default page;
