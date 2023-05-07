import {
  Center,
  Text,
  Stack,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosPublic } from "../../utils/axios/axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isLoading, mutate } = useMutation({
    mutationFn: () =>
      axiosPublic
        .post("/api/v1/auth/login", { email, password })
        .then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data?.message);
      dispatch(login({ accessToken: data?.accessToken, user: data?.user }));
      navigate("/dashboard");
    },

    onError(error: any) {
      if (!error?.response) return toast.error("Server error");
      toast.error(error?.response?.data?.message);
    },
  });

  return (
    <Center w="full" h="100vh">
      <Stack
        spacing={0}
        rounded="lg"
        w="md"
        align="center"
        p={[3, 7]}
        boxShadow="lg"
      >
        <Heading pb={[4, 7]}>Login</Heading>

        <form
          style={{ width: "100%" }}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            mutate();
          }}
        >
          <VStack py={3} spacing={3} w="full">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                size="md"
                id="email"
                type="email"
                placeholder="Email"
                borderBottomColor="gray.200"
                variant="flushed"
                px="2"
                w="full"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                size="md"
                type="password"
                placeholder="Password"
                borderBottomColor="gray.200"
                variant="flushed"
                px="2"
                id="password"
                w="full"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </FormControl>
            <VStack w="full" spacing={0} pt={[2, 4]}>
              <Button
                disabled={isLoading}
                w="full"
                variant="solid"
                colorScheme="orange"
                type="submit"
                mb={2}
              >
                {isLoading ? <Spinner /> : "Sign in"}
              </Button>
              <Text>Forgot password?</Text>
              <Link
                to="/reset-password"
                style={{ textDecoration: "underline", color: "red" }}
              >
                Click me
              </Link>
            </VStack>
          </VStack>
        </form>
      </Stack>
    </Center>
  );
};

export default Login;
