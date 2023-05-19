import { Container } from "@chakra-ui/react";
import React from "react";

interface IMainContainer {
  children: React.ReactNode;
  px?: number;
  py?: number;
  my?: number;
}

const MainContainer = ({ children, my, px, py }: IMainContainer) => {
  return (
    <Container
      as="div"
      maxW="container.xl"
      mx="auto"
      px={px ? px : 0}
      py={py ? py : 0}
      my={my ? my : 0}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
