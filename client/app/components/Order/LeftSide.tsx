import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";

const LeftSide = () => {
  return (
    <Flex w="full" h="full" flex={6} gap={4} flexDir="column">
      <Box
        w="full"
        h="full"
        p={5}
        border="2px"
        borderColor="gray.100"
        rounded="lg"
        shadow="sm"
      >
        <Heading fontSize="4xl" fontWeight="bold">
          Review Item and Shopping
        </Heading>
        <HStack
          mt={4}
          w="full"
          spacing={10}
          align="center"
          justify="flex-start"
        >
          <Image
            src="/products/2.png"
            alt="product"
            w="40"
            h="40"
            objectFit="cover"
            rounded="md"
            bg="gray.100"
          />
          <Flex justify="space-between" w="full">
            <VStack align="flex-start">
              <Heading as="h1" fontSize="2xl" fontWeight="extrabold">
                Airpods - Max
              </Heading>
              <Text fontWeight="normal">Color - pink</Text>
            </VStack>
            <VStack align="flex-end">
              <Text fontWeight="bold">$553</Text>
              <Text fontWeight="medium">Quantity: 01</Text>
            </VStack>
          </Flex>
        </HStack>
      </Box>
      <Box
        w="full"
        h="full"
        p={5}
        border="2px"
        borderColor="gray.100"
        rounded="lg"
        shadow="sm"
      >
        <HStack w="full" justify="space-between">
          <Heading fontSize="4xl" fontWeight="bold">
            Delivery Information
          </Heading>
          <Button rightIcon={<Icon as={BiPencil} />} size="sm" rounded="full">
            Edit Information
          </Button>
        </HStack>
        <VStack mt={7} w="full" spacing={3} align="flex-start">
          <HStack w="full" justify="revert-layer">
            <Text w="20%" fontWeight="semibold">
              Name:
            </Text>
            <Text w="80%" color="gray.500" fontWeight="normal">
              Sabbir Hossain Shuvo
            </Text>
          </HStack>
          <HStack w="full" justify="revert-layer">
            <Text w="20%" fontWeight="semibold">
              Address:
            </Text>
            <Text w="80%" color="gray.500" fontWeight="normal">
              Dhanmondi 15, Hatembag Lene 110A, Dhaka
            </Text>
          </HStack>
          <HStack w="full" justify="revert-layer">
            <Text w="20%" fontWeight="semibold">
              City:
            </Text>
            <Text w="80%" color="gray.500" fontWeight="normal">
              Dhaka
            </Text>
          </HStack>
          <HStack w="full" justify="revert-layer">
            <Text w="20%" fontWeight="semibold">
              Phone:
            </Text>
            <Text w="80%" color="gray.500" fontWeight="normal">
              +8801642562603
            </Text>
          </HStack>
          <HStack w="full" justify="revert-layer">
            <Text w="20%" fontWeight="semibold">
              Email:
            </Text>
            <Text w="80%" color="gray.500" fontWeight="normal">
              devlopersabbir@gmail.com
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LeftSide;
