import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => {
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        setIsLoading,
        productCart,
        setProductCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
