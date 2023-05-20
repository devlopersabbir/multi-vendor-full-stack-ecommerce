import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./components/common/NotFound";
import PersistLogin from "./components/PersistLogin";
import AuthLayout from "./layouts/AuthLayout";
import Product from "./pages/products/Product";
import User from "./pages/users/User";
import NewUser from "./pages/users/NewUser";
import UpdateUser from "./pages/users/UpdateUser";
import NewProduct from "./pages/products/NewProduct";
import UpdateProduct from "./pages/products/UpdateProduct";
import Categorys from "./pages/category/Categorys";
import NewCategory from "./pages/category/NewCategory";
import UpdateCategory from "./pages/category/UpdateCategory";
import LogoAndOthers from "./pages/websites/logoAndOthers/LogoAndOthers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users">
              <Route index element={<User />} />
              <Route path="create" element={<NewUser />} />
              <Route path="update/:uuid" element={<UpdateUser />} />
            </Route>
            <Route path="products">
              <Route index element={<Product />} />
              <Route path="create" element={<NewProduct />} />
              <Route path="update/:uuid" element={<UpdateProduct />} />
            </Route>
            <Route path="categorys">
              <Route index element={<Categorys />} />
              <Route path="create" element={<NewCategory />} />
              <Route path="update/:uuid" element={<UpdateCategory />} />
            </Route>
            {/** for website routes */}
            <Route path="website">
              <Route index element={<LogoAndOthers />} />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
