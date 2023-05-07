import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./components/common/NotFound";
import PersistLogin from "./components/PersistLogin";
import AuthLayout from "./layouts/AuthLayout";
import Product from "./pages/products/Product";
import User from "./pages/users/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Product />} />
            <Route path="users" element={<User />} />
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
