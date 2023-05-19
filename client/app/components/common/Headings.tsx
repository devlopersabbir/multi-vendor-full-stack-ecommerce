import { Heading } from "@chakra-ui/react";
import React from "react";

interface IHeading {
  text: string;
  color?: string;
  p?: number;
  py?: number;
  px?: number;
  my?: number;
  mx?: number;
  m?: number;
  size?: string;
}

const Headings = ({ text, size, color, m, mx, my, p, px, py }: IHeading) => {
  return (
    <Heading
      my={my ?? "14"}
      fontSize={size ?? "2xl"}
      fontWeight="bold"
      color={color ?? "black"}
    >
      {text}
    </Heading>
  );
};

export default Headings;
