import { IconButton } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";

const Mode = () => {
  return (
    <IconButton
      icon={BsSunFill}
      aria-label="mode button"
      pos="absolute"
      bottom={2}
      left={2}
    />
  );
};

export default Mode;
