import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { IUser } from "../utils/interface/interface";

const useUsers = () => {
  const { users } = useSelector(({ userReducer }: any) => userReducer);
  const dispatch = useDispatch();

  const setAllUser = (users: IUser[]) => {
    dispatch(setUser(users));
  };

  return {
    users,
    setAllUser,
  };
};
export default useUsers;
