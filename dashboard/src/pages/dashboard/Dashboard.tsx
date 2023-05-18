import {
  Flex,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useUsers from "../../hooks/useUsers";
import useProduct from "../../hooks/useProduct";
import SkeletonBox from "../../components/skeleton/dashboard/SkeletonBox";

const Dashboard = () => {
  const axios = useAxios();
  const { setAllUser } = useUsers();
  const { setAllProduct } = useProduct();

  const { data: users, isLoading: userLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      axios.get("/api/v1/users/get-all").then((res: any) => res.data),
    onSuccess: (data) => {
      setAllUser(data);
    },
  });
  const { data: product, isLoading: productLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      axios.get("/api/v1/products/get-all").then((res: any) => res.data),
    onSuccess: (data) => {
      setAllProduct(data);
    },
  });
  return (
    <Stack>
      <Text as="h1" fontSize="16px" fontWeight="500" pb="3">
        Recent summary
      </Text>
      <Grid
        gap={5}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      >
        {userLoading && productLoading ? (
          <SkeletonBox />
        ) : (
          <>
            <Items
              title="Total users"
              name="User"
              link="/dashboard/users"
              ammout={userLoading ? "--" : users?.length}
              bg="linear-gradient(100.12deg, #05933A 4.73%, #0DB14B 102.11%)"
            />
            <Items
              link="/dashboard/product"
              title="Total Product"
              name={"Product"}
              ammout={product?.length}
              bg="linear-gradient(100.9deg, #1929BB 4.71%, #3F4ED4 99.88%)"
            />
            <Items
              link="/dashboard/chart-data"
              title="Total Order"
              name="Order"
              ammout={4}
              bg="linear-gradient(100.43deg, #E2104F 1.38%, #FF447C 99.88%)"
            />
            <Items
              title="Total users"
              name="User"
              link="/dashboard/users"
              ammout={userLoading ? "--" : users?.length}
              bg="linear-gradient(100.12deg, #05933A 4.73%, #0DB14B 102.11%)"
            />
            <Items
              link="/dashboard/product"
              title="Total Product"
              name={"Product"}
              ammout={product?.length}
              bg="linear-gradient(100.9deg, #1929BB 4.71%, #3F4ED4 99.88%)"
            />
            <Items
              link="/dashboard/chart-data"
              title="Total Order"
              name="Order"
              ammout={4}
              bg="linear-gradient(100.43deg, #E2104F 1.38%, #FF447C 99.88%)"
            />
          </>
        )}
      </Grid>
    </Stack>
  );
};

export default Dashboard;

interface IItemsProps {
  title: string;
  name: string;
  ammout: number;
  bg: string;
  link: string;
}
const Items: React.FC<IItemsProps> = ({ title, name, ammout, bg, link }) => {
  return (
    <Flex
      w="264px"
      h="120px"
      rounded="12px"
      bg={bg}
      p={4}
      flexDir="column"
      justify="space-between"
      color="white"
    >
      <Text
        fontSize="16px"
        fontWeight="400"
        letterSpacing="1.1%"
        color="white"
        lineHeight="24px"
      >
        {title}
      </Text>
      <HStack justify="space-between" align="end">
        <VStack spacing={0} align="left">
          <Text fontSize="10px" fontWeight="400">
            {name}
          </Text>
          <CountUp
            style={{ fontSize: "30px", fontWeight: "500", lineHeight: "32px" }}
            end={ammout}
            start={0}
            duration={2.75}
            decimals={0}
            decimal=","
          />
        </VStack>
        <Link to={link}>
          <Icon as={BiRightArrow} />
        </Link>
      </HStack>
    </Flex>
  );
};
