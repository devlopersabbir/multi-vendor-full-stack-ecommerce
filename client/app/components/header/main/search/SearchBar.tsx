import {
  IconButton,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <>
      <Popover trigger={"click"} placement={"bottom-start"}>
        <PopoverTrigger>
          <IconButton
            aria-label="Search button"
            rounded="full"
            icon={<FiSearch size="24px" />}
          />
        </PopoverTrigger>
        <PopoverContent>
          <Input type="text" placeholder="Search..." fontWeight="semibold" />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchBar;
