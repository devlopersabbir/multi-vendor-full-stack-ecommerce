import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
} from "pure-react-carousel";
import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { productImage } from "../utils/_data";

const ProductPreviewSlider = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  return (
    <HStack gap={2}>
      <VStack gap={1}>
        {productImage &&
          productImage.map((im: any, i: number) => (
            <Image
              key={i}
              bg="gray.50"
              p={1}
              rounded="md"
              onClick={() => setSelectedImage(im?.uuid)}
              objectFit="cover"
              src={im?.image}
              alt="image "
              w="24"
              h="24"
            />
          ))}
      </VStack>
      <Box w="full" rounded="xl" bg="gray.50" overflow="hidden" shadow="md">
        <CarouselProvider
          visibleSlides={1}
          totalSlides={productImage.length}
          naturalSlideWidth={400}
          naturalSlideHeight={500}
          currentSlide={selectedImage ?? null}
        >
          <Slider>
            {productImage &&
              productImage.map((i: any, index: number) => (
                <Slide index={index} key={index}>
                  <ImageWithZoom alt="product" src={i?.image} />
                </Slide>
              ))}
          </Slider>
        </CarouselProvider>
      </Box>
    </HStack>
  );
};

export default ProductPreviewSlider;
