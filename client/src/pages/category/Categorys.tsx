import {
  Card,
  Flex,
  Heading,
  Button,
  CardBody,
  CardHeader,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Datatable from "../../components/dataTable/DataTable";
import { createColumnHelper } from "@tanstack/table-core";
import { ICategory, IUser } from "../../utils/interface/interface";
import moment from "moment";
import useAxios from "../../hooks/useAxios";
import Error from "../../components/common/Error";
import SkeletonTable from "../../components/skeleton/table/SkeletonTable";

const Categorys = () => {
  const columnHelper = createColumnHelper<ICategory>();
  const columns = [
    columnHelper.accessor("uuid", {
      header: () => "S.N",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("image", {
      header: () => "Image",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Created At",
      cell: (info) => moment(info.getValue()).format("LL"),
    }),

    columnHelper.display({
      header: "Actions",
      id: "actions",
      cell: (props: any) => {
        return (
          <Button
            as={Link}
            to={`/categorys/update/${props.row.original.uuid}`}
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
  const { data, isError, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      axios.get("/api/v1/categorys/get-all").then((res) => res.data),
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
          List of Category
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
            to="/categorys/create"
            bg="primary.200"
            color="white"
            colorScheme="yellow"
            leftIcon={<Icon as={AiOutlinePlusCircle} />}
          >
            New Category
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

export default Categorys;
