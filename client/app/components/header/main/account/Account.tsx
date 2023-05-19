import {
  Divider,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdAccountCircle, MdCreate } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const Account = () => {
  return (
    <Menu>
      <MenuButton>
        <HStack spacing={1}>
          <Icon
            aria-label="account"
            fontSize="23px"
            as={BiUser}
            fontWeight="600"
            color="black"
          />
          <Text fontWeight="600" fontSize="md">
            Account
          </Text>
        </HStack>
      </MenuButton>
      <MenuList border="none" backdropBlur="2px" backdropFilter="auto">
        <MenuItem>
          <HStack align="center" spacing={3}>
            <Icon as={FiLogIn} size="24px" fontWeight="600" color="pink.400" />
            <Text fontWeight="600" as={Link} href="/auth/login">
              Login
            </Text>
          </HStack>
        </MenuItem>
        <Divider color="gray.200" />
        <MenuItem>
          <HStack align="center" spacing={3}>
            <Icon as={MdCreate} size="24px" fontWeight="600" color="pink.400" />
            <Text fontWeight="600" as={Link} href="/auth/signup">
              Sing up
            </Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Account;
