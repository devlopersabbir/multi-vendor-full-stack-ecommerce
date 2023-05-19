"use client";

import { NAV_ITEMS } from "@/app/utils/_data";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Menu = () => {
  return (
    <Stack flexDir="row" gap={4} align="center">
      {NAV_ITEMS.map((navItem, index: number) => (
        <Box key={index} mt={2}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Text
                as={Link}
                // p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={600}
                color="black"
              >
                {navItem.label}
              </Text>
            </PopoverTrigger>

            {navItem?.children && (
              <PopoverContent
                boxShadow={"xl"}
                backdropBlur="2px"
                backdropFilter="auto"
                bg={"gray.50"}
                p={2}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child, i: number) => (
                    <Box
                      key={i}
                      as={Link}
                      href={child?.href}
                      role={"group"}
                      display={"block"}
                      p={2}
                      rounded={"md"}
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text
                            transition={"all .3s ease"}
                            _groupHover={{ color: "pink.400" }}
                            fontWeight={500}
                          >
                            {child?.label}
                          </Text>
                          <Text fontSize={"sm"}>{child?.subLabel}</Text>
                        </Box>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default Menu;
