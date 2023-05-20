import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAxios from "../../../../hooks/useAxios";
import useFileUpload from "../../../../hooks/useFileUpload";
import Error from "../../../common/Error";
import FileInput from "../../../common/FileInput";
import { baseURL } from "../../../../utils/axios/axios";
import { useState } from "react";

const LogoHero = () => {
  const [heading, setHeading] = useState<string>("");

  const axios = useAxios();
  const queryClient = useQueryClient();
  const { loading, error, images, upload } = useFileUpload();
  const heroUpload = useFileUpload();
  console.log(images);
  const uploadMutation = useMutation({
    mutationFn: () =>
      axios.post("/api/v1/website/logo-heading").then((res) => res.data),
    onError: (e: any) => {
      if (!e?.response) return toast.error("Server not responding..");
      toast.error(e.response?.data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["logo"] });
      toast.success("Uploaded!!!!", { duration: 5000 });
    },
  });
  return (
    <Card
      bg="#FFFFFF"
      border="1px"
      borderColor="#BABECB"
      rounded="10px"
      boxShadow="0px 4px 6px rgba(94, 73, 155, 0.04)"
    >
      <CardHeader bg="#E9EEFF">
        <Heading fontSize="16px" fontWeight={700}>
          Logo, Hero Image
        </Heading>
      </CardHeader>
      <CardBody>
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap={6}
          w="full"
        >
          <Stack>
            <FormControl isRequired>
              <FormLabel>Header Logo</FormLabel>
              <FileInput onChange={(e) => upload(e.target.files)} />
              <FormHelperText>
                Image Diminution (W 160 X H 64) | Maximum File size 500kb | File
                Format JPG, PNG,GIF,WEBP
              </FormHelperText>
            </FormControl>
            {loading ? (
              <Spinner />
            ) : error ? (
              <Error message="Upload fail try again" />
            ) : images.length ? (
              <Image
                w="90px"
                alt="uploaded image"
                src={`${baseURL}/uploads/${images}`}
              />
            ) : null}
          </Stack>

          <Stack>
            <FormControl isRequired>
              <FormLabel>Hero Image</FormLabel>
              <FileInput onChange={(e) => heroUpload.upload(e.target.files)} />
              <FormHelperText>
                Image Diminution (W 1920 X H 700) | Maximum File size 500kb |
                File Format JPG, PNG,GIF,WEBP
              </FormHelperText>
            </FormControl>
            {loading ? (
              <Spinner />
            ) : error ? (
              <Error message="Upload fail try again" />
            ) : images.length ? (
              <Text>Ready to show</Text>
            ) : images.length ? (
              <Image
                w="90px"
                alt="uploaded image"
                src={`${baseURL}/uploads/${images}`}
              />
            ) : null}
          </Stack>
          <FormControl isRequired>
            <FormLabel>Hero Heading</FormLabel>
            <Input
              size="lg"
              onChange={(e: any) => setHeading(e.target.value)}
              type="text"
              placeholder="Hero section heading"
            />
          </FormControl>
        </Grid>
      </CardBody>
      <CardFooter justify="flex-end">
        <Button
          type="button"
          fontSize="16px"
          fontWeight="400"
          bg="#FF6633"
          color="white"
          rounded="6px"
          width="130px"
          isLoading={uploadMutation.isLoading}
          onClick={() => uploadMutation.mutate()}
          _hover={{ bg: "#fb4509", transition: "ease 0.3s all" }}
        >
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LogoHero;
