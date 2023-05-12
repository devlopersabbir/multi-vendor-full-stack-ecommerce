import {
  Card,
  Flex,
  Heading,
  Button,
  CardBody,
  CardHeader,
  Icon,
  Stack,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Datatable from "../../components/dataTable/DataTable";
import { createColumnHelper } from "@tanstack/table-core";
import { IUser } from "../../utils/interface/interface";
import moment from "moment";
import useAxios from "../../hooks/useAxios";
import Error from "../../components/common/Error";
import SkeletonTable from "../../components/skeleton/table/SkeletonTable";
import { MdQuickreply } from "react-icons/md";
import View from "../../components/modal/view/View";
import useUsers from "../../hooks/useUsers";

const User = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { set_SelectedUser } = useUsers();
  const columnHelper = createColumnHelper<IUser>();
  const columns = [
    columnHelper.accessor("uuid", {
      header: () => "S.N",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Email ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phone", {
      header: () => "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("role", {
      header: () => "Role",
      cell: (info) => info.getValue().replace("_", " "),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Join Date",
      cell: (info) => moment(info.getValue()).format("LL"),
    }),

    columnHelper.display({
      header: "Actions",
      id: "actions",
      cell: (props: any) => {
        return (
          <ButtonGroup>
            <Button
              as={Link}
              to={`/users/update/${props.row.original.uuid}`}
              rounded="2xl"
              size="sm"
              fontSize="14px"
              border="2px solid gray"
              leftIcon={<Icon mr={-1} as={AiOutlineEye} fontSize="16px" />}
            >
              Open
            </Button>

            <Button
              onClick={() => {
                set_SelectedUser(props.row?.original as IUser);
                onOpen();
              }}
              rounded="2xl"
              size="sm"
              fontSize="14px"
              colorScheme="green"
              leftIcon={<Icon mr={-1} as={MdQuickreply} fontSize="16px" />}
            >
              View
            </Button>
          </ButtonGroup>
        );
      },
    }),
  ];
  const axios = useAxios();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => axios.get("/api/v1/users/get-all").then((res) => res.data),
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
          List of Users
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
            to="/users/create"
            bg="primary.200"
            color="white"
            colorScheme="yellow"
            leftIcon={<Icon as={AiOutlinePlusCircle} />}
          >
            New user
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
      <View onClose={onClose} isOpen={isOpen} heading="User info" />
    </Card>
  );
};

export default User;
