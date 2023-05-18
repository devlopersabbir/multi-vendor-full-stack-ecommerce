import { Alert, AlertIcon } from "@chakra-ui/react";

const Error = ({ message }: { message: string }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default Error;
