import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setSelectedUser,
  unsetSelectedUser,
} from "../redux/slices/userSlice";
import { IUser } from "../utils/interface/interface";
import { IUserState } from "../utils/interface/redux";

const useUsers = () => {
  const users: IUserState = useSelector(({ userReducer }: any) => userReducer);
  const dispatch = useDispatch();

  const setAllUser = (users: IUser[]) => {
    dispatch(setUser(users));
  };

  const set_SelectedUser = (user: IUser) => {
    dispatch(setSelectedUser(user as any)); // on this line error occurd
  };

  const un_SetSelectedUser = () => {
    dispatch(unsetSelectedUser()); // also this line
  };

  return {
    user: users.selectedUser,
    setAllUser,
    set_SelectedUser,
    un_SetSelectedUser,
  };
};
export default useUsers;
