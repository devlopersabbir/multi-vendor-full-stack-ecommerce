import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface IRating {
  rating?: number;
  numberOfRating?: number;
}

const Rating = ({ rating, numberOfRating }: IRating) => {
  return (
    <HStack>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating ?? 3.5 * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < 4.2 ? "tomato" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf color="tomato" key={i} style={{ marginLeft: "1" }} />
            );
          }
          return <BsStar color="tomato" key={i} style={{ marginLeft: "1" }} />;
        })}
      <Text fontSize="md" fontWeight="bold">
        ({numberOfRating ?? 55})
      </Text>
    </HStack>
  );
};

export default Rating;
