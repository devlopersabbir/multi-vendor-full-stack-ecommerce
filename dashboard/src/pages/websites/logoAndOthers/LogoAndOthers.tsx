import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import LogoHero from "../../../components/form/website/logoAndOthers/LogoHero";
// import { useQueries, useQuery } from "@tanstack/react-query";
// import Error from "../../../components/common/Error";
// import Loading from "../../../components/common/Loading";
//import ContactSocial from "../../../components/forms/website/LogoOthers/ContactSocial";
//import LogoHero from "../../../components/forms/website/LogoOthers/LogoHero";
// import useAxios from "../../../hooks/useAxios";
// import { IContact } from "../../../utils/types";

const LogoAndOthers = () => {
  //const axios = useAxios();
  /*
  const contactQuery = useQuery<IContact>({
    queryKey: ["contact"],
    queryFn: () => axios.get("/api/website/contact").then((res) => res.data),
  });

  if (contactQuery.isLoading) {
    return <Loading />;
  }

  if (contactQuery.isError) {
    return <Error message="Something went wrong, Please try again." />;
  }
  */

  return (
    <Card
      bg="white"
      rounded="10px"
      boxShadow="0px 4px 6px rgba(94, 73, 155, 0.04)"
    >
      <CardHeader>
        <Heading fontSize="20px" fontWeight={500} lineHeight="23.8px">
          Logo, Hero Image, Contact & Social
        </Heading>
      </CardHeader>
      <Divider />
      <CardBody px={8}>
        <Stack spacing={6}>
          <LogoHero />
          {/* <ContactSocial contact={contactQuery.data} /> */}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default LogoAndOthers;
