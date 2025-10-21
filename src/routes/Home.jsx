import { getProducts } from "../api/products";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Banner from "../components/Banner";

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function Home() {
  const { products: initialProducts } = useLoaderData();

  const { filteredProducts, searchQuery, page, setPage, cart, setCart } =
    useOutletContext();

  const [products, setProducts] = useState(initialProducts || []);
  const [limit] = useState(10);
  const [total, setTotal] = useState(initialProducts.total || 0);
  const [isLoading, setIsLoading] = useState(false);

  const list = searchQuery ? filteredProducts : products;

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const fetchData = async (pageNum = page) => {
    setIsLoading(true);

    const skip = pageNum * limit;

    const data = await getProducts(limit, skip, searchQuery);
    setProducts(data.products);
    setTotal(data.total);
    setIsLoading(false);
    setPage(pageNum);
  };

  useEffect(() => {
    fetchData();
  }, [page, searchQuery, limit]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-blue-50 text-center py-4 mb-7">
        <p className="text-blue-600 font-semibold text-lg font-Inter">
          🌟The latest products at the best prices!
        </p>
      </div>

      <Banner />
      {isLoading ? (
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" />
          <p className="text-gray-500 text-center mt-6">در حال بارگذاری...</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 w-full">
          {list.length > 0 ? (
            list.map((product) => (
              <div
                key={product.id}
                className="flex-none w-1/3 md:w-1/4 lg:w-1/5 p-2"
              >
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center w-full mt-4 font-Inter">
              نتیجه‌ای یافت نشد 😔
            </p>
          )}
        </div>
      )}

      <div className="flex justify-center items-center py-16 gap-4">
        <button
          onClick={() => fetchData(page - 1)}
          disabled={page === 1}
          className={`text-3xl px-2  text-black ${
            page === 1 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-400"
          }`}
        >
          &#60;
        </button>

        {[...Array(4)].map((_, index) => {
          const startPage = page > 1 ? page - 1 : 1;

          const pageNum = startPage + index;
          return (
            <button
              key={pageNum}
              onClick={() => fetchData(pageNum)}
              className={`px-3 py-1 text-black font-normal text-base border rounded-full ${
                page === pageNum
                  ? "bg-blue-500 text-black font-bold"
                  : "hover:bg-blue-600"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={() => fetchData(page + 1)}
          disabled={page === totalPages}
          className={`text-3xl px-2 text-black ${
            page === totalPages
              ? "opacity-30 cursor-not-allowed"
              : "hover:text-gray-400"
          }`}
        >
          &#62;
        </button>
      </div>
    </div>
  );
}
