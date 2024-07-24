import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Products } from "../type/type";
import { getProducts } from "../services/api";
import axios from "axios";
const localhost = "http://localhost:8000";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: Products[];
  getTotalcartAmount: () => number;
  getCartItemQuantity: () => any;
  token: object;
  setToken: React.Dispatch<React.SetStateAction<any>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  localhost: any;
  inputData: string;
  setinputData: React.Dispatch<React.SetStateAction<string>>;
  Category: string;
  setcategory: React.Dispatch<React.SetStateAction<string>>;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [Products, setProducts] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>({});
  const [token, setToken] = useState<any>("");
  const [user, setUser] = useState<any>();
  const [inputData, setinputData] = useState<string>("");
  const [Category, setcategory] = useState<string>("All");

  //

  const loadCartData = async (token: any) => {
    const res = await axios.post(
      `${localhost}/api/cart/get`,
      {},
      { headers: { token } }
    );
    setCartItems(res.data.cartData);
  };
  //
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setUser(localStorage.getItem("user"));
      loadCartData(localStorage.getItem("token"));
    }
  }, [token]);
  //

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result.items);
    });
  }, []);
  //
  function getCartItemQuantity() {
    if (token) {
      let cart = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          cart += cartItems[item];
        }
      }
      return cart;
    } else {
      let cart = 0;
      return cart;
    }
  }

  //

  const increaseCartQuantity = async (itemId: number) => {
    if (!cartItems[itemId]) {
      setCartItems((prev: any) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        `${localhost}/api/cart/add`,
        { itemId },
        { headers: { token } }
      );
    }
  };
  const decreaseCartQuantity = async (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        `${localhost}/api/cart/remove`,
        { itemId },
        { headers: { token } }
      );
    }
  };
  const removeFromCart = async (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: 0 }));
    if (token) {
      await axios.post(
        `${localhost}/api/cart/removeItem`,
        { itemId },
        { headers: { token } }
      );
    }
  };

  function getTotalcartAmount() {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = Products?.find(
          (product: Products) => product._id === item
        );
        totalamount += iteminfo?.price * cartItems[item];
      }
    }
    return Math.round(totalamount);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        getCartItemQuantity,
        getTotalcartAmount,
        token,
        setToken,
        user,
        setUser,
        localhost,
        inputData,
        setinputData,
        Category,
        setcategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
