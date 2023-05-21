import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
} from "pure-react-carousel";
import { Text } from "@chakra-ui/react";

const ProductPreviewSlider = () => {
  return (
    <CarouselProvider
      visibleSlides={2}
      hasMasterSpinner={false}
      totalSlides={6}
      step={3}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
    >
      <Text>Slider</Text>
      <Slider>
        {[0, 1, 2, 3, 4, 5].map((_, index: number) => (
          <Slide index={index} key={index}>
            <ImageWithZoom alt="product" src="/products/1.png" />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default ProductPreviewSlider;
