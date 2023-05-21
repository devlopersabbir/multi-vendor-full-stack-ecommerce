import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
} from "pure-react-carousel";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { productImage } from "../utils/_data";

const ProductPreviewSlider = () => {
  return (
    <HStack>
      <VStack>
        <Text onClick={() => console.log("hello")}>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </VStack>
      <Box w="full">
        <CarouselProvider
          visibleSlides={2}
          hasMasterSpinner={true}
          totalSlides={productImage.length}
          step={3}
          naturalSlideWidth={400}
          naturalSlideHeight={500}
        >
          <Slider>
            {productImage &&
              productImage.map((i: any, index: number) => (
                <Slide index={index} key={index}>
                  <ImageWithZoom alt="product" src={i.image} />
                </Slide>
              ))}
          </Slider>
        </CarouselProvider>
      </Box>
    </HStack>
  );
};

export default ProductPreviewSlider;
