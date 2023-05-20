import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSunFill } from "react-icons/bs";

const Mode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box zIndex={9999} position="absolute" bottom={2} left={2}>
      <IconButton
        transition="all"
        transitionDuration="0.3s"
        transitionDelay="revert"
        as={colorMode === "light" ? BsSunFill : BsMoon}
        onClick={toggleColorMode}
        aria-label="mode button"
      />
    </Box>
  );
};

export default Mode;
