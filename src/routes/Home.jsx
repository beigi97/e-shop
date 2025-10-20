import { getProducts } from "../api/products";
import { useLoaderData, useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export async function loader() {
  const { products } = await getProducts();
  return { products };
}
export default function Home() {
  const { products: initialProducts } = useLoaderData();
  const { filteredProducts, searchQuery } = useOutletContext();
  const [products, setProducts] = useState(initialProducts || []);

  const list = searchQuery ? filteredProducts : products;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 w-full">
        {list.length > 0 ? (
          list.map((product) => (
            <div
              key={product.id}
              className="flex-none w-1/3 md:w-1/4 lg:w-1/5 p-2"
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center w-full mt-4">
            نتیجه‌ای یافت نشد 😔
          </p>
        )}
      </div>
    </div>
  );
}
