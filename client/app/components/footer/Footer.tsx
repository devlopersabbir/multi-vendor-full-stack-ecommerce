import React from "react";
import MainContainer from "../container/MainContainer";
import { Grid, Heading, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <MainContainer px={2}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} my={14}>
        <Stack>
          <Heading>Logo</Heading>
        </Stack>
        <Stack>
          <Heading>Department</Heading>
        </Stack>
        <Stack>
          <Heading>Department</Heading>
        </Stack>
        <Stack>
          <Heading>Department</Heading>
        </Stack>
        <Stack>
          <Heading>Department</Heading>
        </Stack>
      </Grid>
    </MainContainer>
  );
};

export default Footer;
