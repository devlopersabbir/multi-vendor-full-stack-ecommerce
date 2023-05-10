import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  Select,
  Spinner,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Role } from "../../utils/enum/enum";
import { IUser } from "../../utils/interface/interface";
import Error from "../common/Error";
import { TRole } from "../../utils/types/types";
import useFileUpload from "../../hooks/useFileUpload";
import FileInput from "../common/FileInput";
import { baseURL } from "../../utils/axios/axios";

interface IUserFormProps {
  mode: "EDIT" | "CREATE";
  user?: IUser;
}
const roles: TRole[] = ["ADMIN", "CUSTOMER", "VENDOR"];

const UserFrom = ({ mode, user }: IUserFormProps) => {
  if (mode === "EDIT" && !user) return <Error message="User not found" />;

  const [role, setRole] = useState<Role | string>(
    mode === "EDIT" && user ? (user.role as Role) : ""
  );
  const [fullName, setFullName] = useState<string>(
    mode === "EDIT" && user ? user.name : ""
  );
  const [email, setEmail] = useState<string>(
    mode === "EDIT" && user ? user.email : ""
  );
  const [phone, setPhone] = useState<string>(
    mode === "EDIT" && user && user.phone ? user.phone : ""
  );
  const [image, setImage] = useState<string>(
    mode === "EDIT" && user && user.image ? user.image : ""
  );
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const axios = useAxios();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { error, images: uploadedImages, loading, upload } = useFileUpload();

  const createMutation = useMutation({
    mutationKey: ["user"],
    mutationFn: () =>
      axios.post(`/api/v1/users/register`, {
        role,
        email,
        password,
        name: fullName,
        phone,
        image,
      }),
    onSuccess() {
      toast.success("User created!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/users");
    },

    onError(error: any) {
      if (!error?.response) return toast.error("Server error");
      toast.error(error?.response?.data?.message);
    },
  });
  const updateMutation = useMutation({
    mutationKey: ["user"],
    mutationFn: () =>
      axios
        .put(`/api/v1/users/update/${user?.uuid}`, {
          role,
          email,
          password,
          name: fullName,
          phone,
          image: uploadedImages[0],
        })
        .then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/users");
    },
    onError: (error: any) => {
      if (!error?.response) return toast.error("Server error");
      toast.error(error?.response?.data?.message);
    },
  });

  const handleCreate = () => {
    if (password !== confirmPassword)
      return toast.error("Password doesn't match");
    createMutation.mutate();
  };

  return (
    <Flex
      bg="white"
      rounded="10px"
      boxShadow="0px 4px 6px rgba(94, 73, 155, 0.04)"
      flexDir="column"
      gap={6}
    >
      {/* page header */}
      <Stack
        borderBottom="1px"
        borderBottomColor="#a6aebb4d"
        w="full"
        p={[2, 5]}
      >
        <Heading fontSize="20px" fontWeight="500">
          {mode === "CREATE" ? "Create new user" : "Update user"}
        </Heading>
      </Stack>
      {/* from */}
      <VStack px={[2, 14]} pb={[2, 5]} spacing={[2, 4]}>
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap={6}
          w="full"
        >
          {/* {mode === "EDIT" ? <FormControl isRequired></FormControl> : null} */}

          <FormControl isRequired>
            <FormLabel fontSize="16px" fontWeight="400">
              User role
            </FormLabel>
            <Select
              onChange={(e) => setRole(e.target.value as Role)}
              placeholder="Select user role"
              defaultValue={mode === "EDIT" ? user?.role : role}
            >
              {roles.map((rl, _) => (
                <option key={rl} value={rl}>
                  {rl === "ADMIN"
                    ? "ADMIN"
                    : rl === "CUSTOMER"
                    ? "CUSTOMER"
                    : rl === "VENDOR"
                    ? "VENDOR"
                    : null}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="16px" fontWeight="400">
              Full Name
            </FormLabel>
            <InputGroup>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                size="lg"
                type="text"
                placeholder="Enter full name"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="16px" fontWeight="400">
              Email
            </FormLabel>
            <InputGroup>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                type="text"
                placeholder="Enter email address"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="16px" fontWeight="400">
              Phone
            </FormLabel>
            <InputGroup>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                size="lg"
                type="text"
                placeholder="Enter Phone number"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired={mode === "CREATE" ? true : false}>
            <FormLabel fontSize="16px" fontWeight="400">
              Password {mode === "EDIT" && "(Optional)"}
            </FormLabel>
            <InputGroup>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                type="password"
                placeholder="Enter password"
              />
            </InputGroup>
          </FormControl>
          {mode === "CREATE" ? (
            <FormControl isRequired>
              <FormLabel fontSize="16px" fontWeight="400">
                Confirm Password
              </FormLabel>
              <InputGroup>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  size="lg"
                  type="password"
                  placeholder="Enter password"
                />
              </InputGroup>
            </FormControl>
          ) : null}
          <FormControl isRequired={mode === "CREATE" ? true : false}>
            <FormLabel>Image</FormLabel>
            <FileInput
              onChange={(e: any) => {
                if (e.target.files?.length) {
                  upload(e.target.files);
                }
              }}
            />
            <FormHelperText>
              Maximum File size 500kb | File Format JPG, PNG,GIF,WEBP
            </FormHelperText>
            {loading ? (
              <Spinner />
            ) : error ? (
              <Error message="File Upload fail try again or refresh the page" />
            ) : (
              <>
                <Image
                  width="90px"
                  objectFit="cover"
                  height="120px"
                  mt={4}
                  alt={mode === "EDIT" ? user?.name : "Image"}
                  src={
                    mode === "EDIT" && !uploadedImages.length
                      ? `${baseURL}/uploads/${user?.image}`
                      : `${baseURL}/uploads/${uploadedImages[0]}`
                  }
                />
              </>
            )}
          </FormControl>
        </Grid>

        <HStack justify="space-between" w="full" py={5}>
          <Button
            as={Link}
            to="/users"
            leftIcon={<BsArrowLeftCircle />}
            fontSize="16px"
            fontWeight="400"
            rounded="6px"
          >
            Back
          </Button>
          <Button
            type="submit"
            fontSize="16px"
            fontWeight="400"
            bg="#FF6633"
            color="white"
            rounded="6px"
            isLoading={
              mode === "CREATE"
                ? createMutation.isLoading
                : updateMutation.isLoading
            }
            width="130px"
            onClick={() =>
              mode === "CREATE" ? handleCreate() : updateMutation.mutate()
            }
            _hover={{ bg: "#fb4509", transition: "ease 0.3s all" }}
          >
            {mode === "CREATE" ? "Create" : "Update"}
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default UserFrom;
