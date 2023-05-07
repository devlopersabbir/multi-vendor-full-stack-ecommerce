import { login } from "../redux/slices/authSlice";
import { axiosPublic } from "../utils/axios/axios";
import { useDispatch } from "react-redux";
const useRefresh = () => {
  const dispatch = useDispatch();
  const refresh = async () => {
    const { data } = await axiosPublic.get("/api/v1/auth/refresh");
    console.log("From refresh token hooks: ", data);
    dispatch(login({ accessToken: data?.accessToken, user: data?.user }));
    const token = data.accessToken;
    return token;
  };

  return refresh;
};

export default useRefresh;
