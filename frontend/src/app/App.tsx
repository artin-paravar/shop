import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import { Shop } from "./shop/shop";
import { Navbar } from "./components/navbar/navbar";
import Notfound from "./not-found";
import ProductItem from "./shop/productItem";
import Cart from "./cart/cart";
import { Toaster } from "react-hot-toast";
import { Profile } from "./pages/profile/profile";
import { useShoppingCart } from "./context/shop-context";
import { SearchPage } from "./pages/searchPage/searchPage";
const App = () => {
  const { token } = useShoppingCart();

  return (
    <>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 1000 }} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/search" element={<SearchPage />} />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/" />}
        />

        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/cart"
          element={token ? <Cart /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Notfound />} />
        <Route
          path="/shop/:id"
          element={token ? <ProductItem /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
