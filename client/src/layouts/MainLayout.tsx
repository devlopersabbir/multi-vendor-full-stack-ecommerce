import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Tobpar from "../components/topbar/Topbar";

const MainLayout = () => {
  return (
    <Flex>
      <Sidebar />
      <Box as="main">
        <Tobpar />
        <Stack p={4} mt={"94px"}>
          <Outlet />
        </Stack>
      </Box>
    </Flex>
  );
};

export default MainLayout;
