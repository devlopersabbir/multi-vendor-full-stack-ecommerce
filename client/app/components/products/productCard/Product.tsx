import { Grid } from "@chakra-ui/react";
import React from "react";
import Cards from "./Cards";

const Product = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={5}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((_, i) => (
        <Cards key={i} />
      ))}
    </Grid>
  );
};

export default Product;
