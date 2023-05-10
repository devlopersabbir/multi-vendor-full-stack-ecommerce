import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { accessToken } = useSelector(({ authReducer }: any) => authReducer);

  return accessToken ? <Navigate to="/" /> : <Outlet />;
};

export default AuthLayout;
