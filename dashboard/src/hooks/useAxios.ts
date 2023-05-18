import { useSelector } from "react-redux";
import useRefresh from "./useRefreshToken";
import { useEffect } from "react";
import { axiosPrivete } from "../utils/axios/axios";

const useAxios = () => {
  const refresh = useRefresh();
  const { accessToken } = useSelector(({ authReducer }: any) => authReducer);

  useEffect(() => {
    // request intercept
    const requestIntercept = axiosPrivete.interceptors.request.use(
      (config: any) => {
        if (config.headers && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // response intercept
    const responseIntercept = axiosPrivete.interceptors.response.use(
      (response) => response,
      async (error: any) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;

          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axiosPrivete(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivete.interceptors.response.eject(requestIntercept);
      axiosPrivete.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);
  return axiosPrivete;
};
export default useAxios;
