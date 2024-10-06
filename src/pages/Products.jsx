import React from "react";
import { useProduct } from "../context/ProductContext";
import { Card } from "flowbite-react";

function Products() {
  const { products, loading, error } = useProduct(); // Destructure loading and error

  // Display a loading message while fetching products
  if (loading)
    return <div className="text-center mt-4">Loading products...</div>;

  // Display an error message if there's an error fetching products
  if (error)
    return <div className="text-center mt-4 text-red-500">{error}</div>;

  // Display the list of products
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {products.map((productItem) => (
        <div
          key={productItem.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
        >
          <Card className="h-full flex flex-col">
            {/* Image Container with consistent aspect ratio */}
            <div className="relative w-full h-56">
              <img
                src={productItem.images[0]}
                alt={productItem.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col flex-grow">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {productItem.title}
                </h5>
              </a>

              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${productItem.price}
                </span>
                <a
                  href="#"
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Products;
