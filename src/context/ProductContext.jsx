import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the ProductContext
const ProductContext = createContext();

// Context Provider Component
export const ProductContextWrapper = ({ children }) => {
  const [products, setProducts] = useState([]); // Renamed to 'products' for clarity
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetchProducts(); // Function name updated to plural
  }, []);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(url);
      setProducts(response.data.products); // Set products from API response
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later."); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProduct = () => {
  return useContext(ProductContext);
};
