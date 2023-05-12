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

interface IProductForm {
  mode: "UPDATE" | "CREATE";
  product?: IProduct;
}

const ProductForm: React.FC<IProductForm> = ({ mode, product }) => {
  const axios = useAxios();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const category = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      axios.get("/api/v1/categorys/get-all").then((res) => res.data),
  });

  const createMutation = useMutation({
    mutationKey: ["product"],
    mutationFn: () =>
      axios
        .post(`/api/v1/products/create`, {
          name,
          price,
          quantity,
          categoryUuid: categorys,
          shortDescription,
          description,
          images: uploadedImages,
        })
        .then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["product"] });
      queryClient.resetQueries({ queryKey: ["product"] });
      navigate("/products");
    },

    onError: () => (error: any) => {
      if (!error?.response) return toast.error("Server error");
      toast.error(error?.response?.data?.message);
    },
  });

  const [name, setName] = useState<string>(
    mode === "UPDATE" && product ? product.name : ""
  );
  const [price, setPrice] = useState<number>(
    mode === "UPDATE" && product ? product.price : 0
  );
  const [quantity, setQuantity] = useState<number>(
    mode === "UPDATE" && product ? product.quantity : 0
  );
  const [categorys, setCategorys] = useState<string>(
    mode === "UPDATE" && product ? product.categoryUuid : ""
  );
  const [brand, setBrand] = useState<string>(
    mode === "UPDATE" && product ? product.brand : ""
  );
  // const [images, setImages] = useState<any>(
  //   mode === "UPDATE" && product ? product.images : []
  // );
  const [shortDescription, setShortDescription] = useState<string>(
    mode === "UPDATE" && product ? product.shortDescription : ""
  );
  const [description, setDescription] = useState<string>(
    mode === "UPDATE" && product ? product.description : ""
  );

  const { error, images: uploadedImages, loading, upload } = useFileUpload();
  if (category && category.isLoading) return <Loading />;
  if (category && category.isError)
    return <Error message="Something went wrong try again after a while" />;

  // const updateMutation = useMutation({
  //   mutationKey: ["product"],
  //   mutationFn: () =>
  //     axios
  //       .put(`/api/v1/products/create`, {
  //         name,
  //         price,
  //         quantity,
  //         categoryUuid: categorys,
  //         shortDescription,
  //         description,
  //         images: uploadedImages,
  //       })
  //       .then((res) => res.data),
  //   onSuccess: (data: any) => {
  //     toast.success(data?.message);
  //     navigate("/products");
  //   },

  //   onError: () => (error: any) => {
  //     if (!error?.response) return toast.error("Server error");
  //     toast.error(error?.response?.data?.message);
  //   },
  // });
  // const handleCreate = () => {
  //   if (!name || !price || !shortDescription)
  //     return toast.error("Please fill the required input!");
  //   createMutation.mutate();
  // };
  // const handleUpdate = () => {
  //   updateMutation.mutate();
  //   // console.log("hello");
  // };
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
          {mode === "CREATE" ? "New" : "Update"} Product
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
              type="text"
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name/title"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <InputGroup>
              <Input
                type="number"
                size="lg"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Price"
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <InputGroup>
              <Input
                type="number"
                size="lg"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="Quantity"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="16px" fontWeight="400">
              Category
            </FormLabel>
            <Select
              onChange={(e) => setCategorys(e.target.value)}
              placeholder="Select Category"
            >
              {category &&
                category?.data?.map((cat: any, index: number) => (
                  <option key={index} value={cat.uuid}>
                    {cat.name}
                  </option>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Brand Name</FormLabel>
            <InputGroup>
              <Input
                type="text"
                size="lg"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand name"
              />
            </InputGroup>
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
            ) : mode === "CREATE" ? (
              <>
                <HStack align="center" w="full" gap={2}>
                  {uploadedImages &&
                    uploadedImages.map((image: string, index: number) => {
                      return (
                        <Image
                          key={index}
                          width="90px"
                          objectFit="cover"
                          height="120px"
                          mt={4}
                          alt="Uploaded Image"
                          src={`${baseURL}/uploads/${image}`}
                        />
                      );
                    })}
                </HStack>
              </>
            ) : null}
          </FormControl>
        </Grid>
        <Grid
          mt={5}
          templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}
          w="full"
        >
          <FormControl isRequired w="full">
            <FormLabel>Short Description</FormLabel>
            <ReactQuill
              style={{ height: "100px", marginBottom: "40px" }}
              theme="snow"
              value={shortDescription}
              onChange={setShortDescription}
            />
          </FormControl>
        </Grid>
        <Grid
          mt={5}
          templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}
          w="full"
        >
          <FormControl isRequired w="full">
            <FormLabel>Short Description</FormLabel>
            <ReactQuill
              style={{ height: "200px", marginBottom: "40px" }}
              theme="snow"
              value={description}
              onChange={setDescription}
            />
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
                : console.log("hello update")
            }
            isLoading={mode === "CREATE" ? false : false}
            _hover={{ bg: "#fb4509", transition: "ease 0.3s all" }}
          >
            {mode === "CREATE" ? "Create" : "Save Changes"}
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default ProductForm;
