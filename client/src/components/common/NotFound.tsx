import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center h="100vh" bg="">
      <VStack spacing={5}>
        <Heading color="orange.600" fontSize="3xl">
          404 Page Not Found
        </Heading>
        <Button colorScheme="orange" as={Link} to="/" size="lg" w="max-content">
          Go Back
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;
