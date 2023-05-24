import { Center, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import useRefresh from "../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PersistLogin = () => {
  const { accessToken } = useSelector(({ authReducer }: any) => authReducer);
  const refresh = useRefresh();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error: any) {
      } finally {
        setLoading(false);
      }
    };
    !accessToken ? verifyRefreshToken() : setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
