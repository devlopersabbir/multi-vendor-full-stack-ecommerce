import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Tobpar from "../components/topbar/Topbar";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { accessToken } = useSelector(({ authReducer }: any) => authReducer);
  return accessToken ? (
    <Flex>
      <Sidebar />
      <Box as="main">
        <Tobpar />
        <Stack p={4} mt={"94px"}>
          <Outlet />
        </Stack>
      </Box>
    </Flex>
  ) : (
    <Navigate to="/login" />
  );
};

export default MainLayout;
