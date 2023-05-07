import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { IProduct, IUser } from "../utils/interface/interface";
import { setProduct } from "../redux/slices/productSlice";

const useProduct = () => {
  const { products } = useSelector(({ productReducer }: any) => productReducer);
  const dispatch = useDispatch();

  const setAllProduct = (products: IProduct[]) => {
    dispatch(setProduct(products));
  };

  return {
    products,
    setAllProduct,
  };
};
export default useProduct;
