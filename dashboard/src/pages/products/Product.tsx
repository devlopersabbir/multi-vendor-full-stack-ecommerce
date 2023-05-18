import {
  Card,
  Flex,
  Heading,
  Button,
  CardBody,
  CardHeader,
  Icon,
  Stack,
  Image,
  Text,
  Grid,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Datatable from "../../components/dataTable/DataTable";
import { createColumnHelper } from "@tanstack/table-core";
import { IProduct } from "../../utils/interface/interface";
import moment from "moment";
import useAxios from "../../hooks/useAxios";
import Error from "../../components/common/Error";
import SkeletonTable from "../../components/skeleton/table/SkeletonTable";
import useProduct from "../../hooks/useProduct";
import { baseURL } from "../../utils/axios/axios";

const Product = () => {
  const columnHelper = createColumnHelper<IProduct>();
  const columns = [
    columnHelper.accessor("uuid", {
      header: () => "S.N",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("images", {
      header: () => "Image",
      cell: (info) => {
        const images = info.getValue();
        if (Array.isArray(images) && images.length >= 0) {
          return (
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {images?.map((img: string, ind: number) => {
                return (
                  <Image
                    boxShadow="md"
                    rounded="md"
                    p={1}
                    w="40"
                    h="auto"
                    objectFit="cover"
                    key={ind}
                    src={`${baseURL}/uploads/${img}`}
                    alt="product image"
                  />
                );
              })}
            </Grid>
          );
        } else if (typeof images === "string") {
          return (
            <Image src={`${baseURL}/uploads/${images}`} alt="product image" />
          );
        } else {
          return <Text color="red.500">Empty!</Text>;
        }
      },
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: () => "Price",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("quantity", {
      header: () => "Quantity",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("category.name", {
      header: () => "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Created AT",
      cell: (info) => moment(info.getValue()).format("LL"),
    }),

    columnHelper.display({
      header: "Actions",
      id: "actions",
      cell: (props: any) => {
        return (
          <Button
            as={Link}
            to={`/product/update/${props.row.original.uuid}`}
            rounded="2xl"
            size="sm"
            fontSize="14px"
            border="2px solid gray"
            leftIcon={<Icon mr={-1} as={AiOutlineEye} fontSize="16px" />}
          >
            Open
          </Button>
        );
      },
    }),
  ];
  const axios = useAxios();
  const { setAllProduct } = useProduct();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      axios.get("/api/v1/products/get-all").then((res) => res.data),

    onSuccess: (data: any) => {
      setAllProduct(data);
    },
  });

  return (
    <Card
      bg="white"
      rounded="10px"
      boxShadow="0px 4px 6px rgba(94, 73, 155, 0.04)"
    >
      <Flex
        as={CardHeader}
        align="center"
        justify="space-between"
        borderBottom="0.5px solid #BFBFBF"
      >
        <Heading fontWeight={500} fontSize="20px">
          List of Product
        </Heading>
        <Stack direction="row" spacing={4}>
          <Button
            color="white"
            bg="#2C3A4B"
            _hover={{ bg: "#2C3A4B" }}
            rightIcon={<Icon as={IoIosArrowDropdown} />}
          >
            Download
          </Button>
          <Button
            as={Link}
            to="/products/create"
            bg="primary.200"
            color="white"
            colorScheme="yellow"
            leftIcon={<Icon as={AiOutlinePlusCircle} />}
          >
            New Product
          </Button>
        </Stack>
      </Flex>

      <CardBody>
        {isLoading ? (
          <SkeletonTable />
        ) : isError ? (
          <Error message="Something went wrong on server try later" />
        ) : (
          <Datatable data={data} columns={columns} />
        )}
      </CardBody>
    </Card>
  );
};

export default Product;
