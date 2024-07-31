import { Route, Routes } from "react-router-dom";
import Additem from "./pages/add/addItem";
import { Orders } from "./pages/orders/orders";
import { ListItem } from "./pages/listitem/listItem";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
import { Toaster } from "react-hot-toast";

function App() {
  const host = "http://localhost:8000";
  return (
    <>
      <Navbar />
      <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
      <Routes>
        <Route path="/add" element={<Additem host={host} />} />
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/list" element={<ListItem host={host} />} />
      </Routes>
    </>
  );
}

export default App;
