import { Flex, Text, Icon } from "@chakra-ui/react";
import React, { ChangeEvent, useRef } from "react";
import { FiUpload } from "react-icons/fi";

interface FileInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}

const FileInput: React.FunctionComponent<FileInputProps> = ({
  onChange,
  multiple,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <React.Fragment>
      <input
        multiple={multiple}
        ref={inputRef}
        type="file"
        hidden
        onChange={onChange}
      />
      <Flex
        width="full"
        h="47px"
        bg="white"
        border="1px"
        borderColor="gray.300"
        borderRadius="0.375rem"
        cursor="pointer"
        align="center"
        justify="space-between"
        px={5}
        onClick={() => inputRef.current?.click()}
      >
        <Text color="#454545">Choose File</Text>
        <Icon as={FiUpload} fontWeight="bold" fontSize="2xl" />
      </Flex>
    </React.Fragment>
  );
};

export default FileInput;
