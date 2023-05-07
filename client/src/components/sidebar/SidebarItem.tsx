import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Icon,
  Flex,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiCheckSquare } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

interface ISubmenu {
  link: string;
  text: string;
  active?: boolean;
}

type TSidebarItemProps = {
  link?: string;
  text: string;
  icon: JSX.Element;
  active?: boolean;
  submenu?: ISubmenu[];
  navSize: 90 | 260;
};

const SidebarItem: React.FunctionComponent<TSidebarItemProps> = ({
  text,
  icon,

  submenu,
  link,
  navSize,
}) => {
  const location = useLocation();
  if (submenu && submenu.length) {
    return (
      <SubmenuItem
        navSize={navSize}
        text={text}
        icon={icon}
        submenu={submenu}
      />
    );
  } else {
    return (
      <MenuItem
        navSize={navSize}
        text={text}
        icon={icon}
        active={location.pathname === link}
        link={link ? link : "/"}
      />
    );
  }
};

type TMenuItemProps = {
  text: string;
  icon: JSX.Element;
  active?: boolean;
  link: string;

  navSize: 90 | 260;
};
const MenuItem: React.FunctionComponent<TMenuItemProps> = ({
  text,
  icon,
  active,
  link,
  navSize,
}) => {
  return (
    <Flex
      to={link}
      as={Link}
      _hover={{
        bg: "secondary.100",
        color: "white",
      }}
      transition="ease .3s all"
      align="center"
      padding="10px"
      cursor="pointer"
      w="full"
      bg={active ? "secondary.100" : "white"}
      color={active ? "white" : "#2C3A4B"}
      borderRadius={navSize === 260 ? "5px" : "10px"}
      justifyContent={navSize === 90 ? "center" : "space-between"}
    >
      <Flex align="center" gap={navSize === 260 ? "10px" : 0}>
        {icon}
        {navSize === 260 && (
          <Text fontSize="16px" fontWeight={500}>
            {text}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

const SubmenuItem: React.FunctionComponent<TSidebarItemProps> = ({
  text,
  icon,
  submenu,
  navSize,
}) => {
  const location = useLocation();
  return (
    <Accordion allowMultiple width="full">
      <AccordionItem border="unset" p="0" m="0" width="full">
        {({ isExpanded }) => (
          <>
            <Flex
              _hover={{
                bg: "secondary.100",
                color: "white",
              }}
              width="full"
              transition="ease .3s all"
              align="center"
              padding="10px"
              cursor="pointer"
              bg={isExpanded ? "secondary.100" : "white"}
              color={isExpanded ? "white" : "#2C3A4B"}
              borderRadius={"5px"}
              justifyContent={navSize === 90 ? "center" : "space-between"}
              as={AccordionButton}
            >
              <Flex align="center" gap={navSize === 260 ? "10px" : 0}>
                {icon}
                {navSize === 260 && (
                  <Text fontSize="16px" fontWeight={500}>
                    {text}
                  </Text>
                )}
              </Flex>
              {navSize === 260 && <Icon as={IoIosArrowDown} fontSize="18px" />}
            </Flex>
            {submenu && (
              <VStack
                justify="flex-start"
                as={AccordionPanel}
                p={0}
                align="flex-start"
                bg="#FFF3F0"
                py={1}
              >
                {submenu.map((item) => (
                  <Flex
                    key={item.link}
                    as={Link}
                    to={item.link}
                    color={
                      location.pathname === item.link ? "primary.100" : "black"
                    }
                    gap="10px"
                    padding="8px 10px 8px 25px"
                    align="center"
                    justify="flex-start"
                    width="full"
                    cursor="pointer"
                    _hover={{ color: "primary.100" }}
                  >
                    <Icon as={BiCheckSquare} fontSize="16px" />
                    <Text>{item.text}</Text>
                  </Flex>
                ))}
              </VStack>
            )}
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarItem;
