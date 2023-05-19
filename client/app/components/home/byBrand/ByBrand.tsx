import React from "react";
import MainContainer from "../../container/MainContainer";
import Headings from "../../common/Headings";
import { Grid, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";

const ByBrand = () => {
  return (
    <MainContainer px={2} my={14}>
      <Headings text="Todays Best Deals For You!" />
      <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        {[0, 1, 2, 3, 4, 5].map((_, i) => (
          <BrandList key={i} image="brand/1.png" name="Mowlikota" />
        ))}
      </Grid>
    </MainContainer>
  );
};

export default ByBrand;

export interface IBrand {
  image: string;
  name: string;
  message?: string;
}

const BrandList = ({ image, name, message }: IBrand) => {
  return (
    <HStack
      boxShadow="lg"
      spacing={3}
      bg="gray.50"
      rounded="md"
      p={4}
      cursor="pointer"
    >
      <Image src={image} w="20" h="20" rounded="full" alt="brand logo" />
      <Stack>
        <Heading fontSize="lg">{name}</Heading>
        <Text fontWeight="normal" fontSize="md">
          {message ?? "Delivery with in 24 hours"}
        </Text>
      </Stack>
    </HStack>
  );
};
