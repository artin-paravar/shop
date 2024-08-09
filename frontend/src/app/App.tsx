import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/navbar/navbar";
import Notfound from "./not-found";
import ProductItem from "./components/product/productItem";
import Cart from "./pages/cart/cart";
import { Toaster } from "react-hot-toast";
import { Profile } from "./pages/profile/profile";
import { SearchPage } from "./pages/searchPage/searchPage";
import { PrivateRoute } from "./privateRoute";
import { Contact } from "./pages/contactus/contact";
import { Footer } from "./components/footer/footer";
import { Shop } from "./pages/shop/shop";

const App = () => {
  return (
    <> 
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route
          path="/login"
          element={
            !localStorage.getItem("token") ? <Login /> : <Navigate to="/" />
          }
        />
        <Route
          path="/signup"
          element={
            !localStorage.getItem("token") ? <Signup /> : <Navigate to="/" />
          }
        />

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
