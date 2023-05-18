import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Error from "../../components/common/Error";
import Loading from "../../components/common/Loading";
import NotFound from "../../components/common/NotFound";
import UserFrom from "../../components/form/UserForm";
import { IUser } from "../../utils/interface/interface";
import useAxios from "../../hooks/useAxios";

const UpdateUser = () => {
  const { uuid } = useParams();
  const axios = useAxios();
  if (!uuid) return <NotFound />;

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<IUser>({
    queryKey: ["users", uuid],
    queryFn: () =>
      axios.get(`/api/v1/users/get-single/${uuid}`).then((res) => res.data),
  });

  if (isLoading) return <Loading />;
  if (isError)
    return <Error message="User not found somthing went to server" />;
  return <UserFrom mode="EDIT" user={user} />;
};

export default UpdateUser;
