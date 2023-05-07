import {
  Flex,
  IconButton,
  Icon,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FiSearch, FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Tobpar = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  // const logout = async () => {
  //   unsetAuth();
  //   await axiosPublic.post("/api/auth/logout");
  //   navigate("/login");
  //   window.location.replace("/login");
  // };
  return (
    <Flex
      position="fixed"
      zIndex={10}
      left={0}
      top={0}
      justify="flex-end"
      px={8}
      height="90px"
      bg={colorMode === "dark" ? "black" : "white"}
      width="full"
      align="center"
      borderBottom={colorMode === "dark" ? "unset" : "1px"}
      borderBottomColor={colorMode === "dark" ? "unset" : "#EBEEF2"}
    >
      <Flex align="center" gap={4}>
        <IconButton
          aria-label="search-btn"
          rounded="full"
          icon={<Icon as={FiSearch} fontSize="2xl" rounded="full" size="lg" />}
        />
        <Flex align="center" gap={2}>
          <Avatar name="Sabbir" />
          <Flex direction="column">
            <Text fontWeight={500} fontSize="16px">
            SYSTEM ADMIN
            </Text>
            <Text fontSize="14px" fontWeight={500}>
              Head of account
            </Text>
          </Flex>
        </Flex>
        <Menu>
          <IconButton
            as={MenuButton}
            aria-label="more-menu"
            icon={<Icon as={IoIosArrowDown} fontSize="20px" />}
            variant="ghost"
          />

          <MenuList mt={4}>
            <Link to="/">
              <Flex mb={2} gap={2} as={MenuItem}>
                <Icon fontSize="2xl" as={RxDashboard} />
                <Text>Dashboard</Text>
              </Flex>
            </Link>
            <Link to="/dashboard/profile">
              <Flex mb={2} gap={2} as={MenuItem}>
                <Icon fontSize="2xl" as={CgProfile} />
                <Text>Profile</Text>
              </Flex>
            </Link>
            <Link to="/dashboard/settings">
              <Flex mb={2} gap={2} as={MenuItem}>
                <Icon fontSize="2xl" as={FiSettings} />
                <Text>Settings</Text>
              </Flex>
            </Link>
            <Flex  mb={2} gap={2} as={MenuItem}>
              <Icon fontSize="2xl" as={AiOutlinePoweroff} />
              <Text>Log Out</Text>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Tobpar;
