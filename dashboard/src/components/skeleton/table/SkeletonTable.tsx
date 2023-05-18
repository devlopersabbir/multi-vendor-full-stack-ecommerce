import { Skeleton, Stack } from "@chakra-ui/react";

const SkeletonTable = () => {
  return (
    <Stack>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Skeleton key={i} height="35px" rounded="sm" />
      ))}
    </Stack>
  );
};

export default SkeletonTable;
