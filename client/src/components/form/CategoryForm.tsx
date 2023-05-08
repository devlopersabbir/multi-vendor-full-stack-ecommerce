import React, { useState } from "react";
import { IProduct } from "../../utils/interface/interface";
import useAxios from "../../hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../common/Loading";
import Error from "../common/Error";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  Select,
  Spinner,
  Stack,
  VStack,
} from "@chakra-ui/react";
import FileInput from "../common/FileInput";
import useFileUpload from "../../hooks/useFileUpload";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { baseURL } from "../../utils/axios/axios";
import { toast } from "react-hot-toast";

interface ICategoryForm {
  mode: "UPDATE" | "CREATE";
  category?: IProduct;
}

const CategoryForm: React.FC<ICategoryForm> = ({ mode, category }) => {
  const axios = useAxios();
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const createMutation = useMutation({
    mutationKey: ["category"],
    mutationFn: () =>
      axios
        .post(`/api/v1/categorys/create`, {
          name,
          image: uploadedImages[0],
        })
        .then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data?.message);
      QueryClient.invalidateQueries({ queryKey: ["category"] });
      navigate("/categorys");
    },

    onError: () => (error: any) => {
      if (!error?.response) return toast.error("Server error");
      toast.error(error?.response?.data?.message);
    },
  });

  const [name, setName] = useState<string>(
    mode === "UPDATE" && category ? category.name : ""
  );

  const { error, images: uploadedImages, loading, upload } = useFileUpload();

  const updateMutation = useMutation({
    mutationKey: ["product"],
    mutationFn: () =>
      axios
        .put(`/api/v1/categorys/update/${category?.uuid}`, {
          name,
          image: uploadedImages[0],
        })
        .then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data?.message);
      navigate("/categorys");
    },

    onError: () => (error: any) => {
      if (!error?.response) return toast.error("Server error");
      toast.error(error?.response?.data?.message);
    },
  });
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
          {mode === "CREATE" ? "New" : "Update"} Category
        </Heading>
      </Stack>
      {/* from */}
      <VStack px={[2, 14]} pb={[2, 5]} spacing={[2, 4]}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={6}
          w="full"
        >
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Category name"
            />
          </FormControl>

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
                  alt={mode === "UPDATE" ? category?.name : "Image"}
                  src={
                    mode === "UPDATE" && !uploadedImages.length
                      ? `${baseURL}/uploads/${category?.images}`
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
            to="/products"
            leftIcon={<BsArrowLeftCircle />}
            fontSize="16px"
            fontWeight="400"
            rounded="6px"
          >
            Back
          </Button>
          <Button
            type="button"
            fontSize="16px"
            fontWeight="400"
            bg="#FF6633"
            color="white"
            rounded="6px"
            width="130px"
            onClick={() =>
              mode === "CREATE"
                ? createMutation.mutate()
                : updateMutation.mutate()
            }
            isLoading={
              mode === "CREATE"
                ? createMutation.isLoading
                : updateMutation.isLoading
            }
            _hover={{ bg: "#fb4509", transition: "ease 0.3s all" }}
          >
            {mode === "CREATE" ? "Create" : "Save Changes"}
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default CategoryForm;
