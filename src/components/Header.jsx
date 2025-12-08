import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Link } from "react-router-dom";

export default function Header({
  setFilteredProducts,
  setSearchQuery,
  cart,
  setCart,
  setPage,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchQuery(value);
    setPage(0);
  };

  useEffect(() => {
    const fetchSearchProducts = async () => {
      if (inputValue.trim() === "") {
        setFilteredProducts([]);

        return;
      }
      try {
        const data = await getProducts(10, 0, inputValue);
        setFilteredProducts(data.products);
      } catch (err) {
        console.error("Search error:", err);
        setFilteredProducts([]);
      }
    };

    fetchSearchProducts();
  }, [inputValue]);

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer pl-6 font-Inter">
          MyShop
        </h1>

        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-500 transition font-Inter">
            Home
          </Link>
          <Link
            to="/About"
            className="hover:text-blue-500 transition font-Inter"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 transition font-Inter"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <form className="w-3/4   border-gray-500">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search"
                value={inputValue}
                onChange={handleChange}
                className="block  p-4 ps-10 text-sm  border  rounded-xl bg-primary shadow-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>
          </form>

          <button
            className="relative"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <svg
              className=" w-6 h-6 text-gray-700 hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.8999 7.5C8.8999 6.28498 9.88488 5.3 11.0999 5.3H12.8999C14.1149 5.3 15.0999 6.28498 15.0999 7.5C15.0999 7.77615 15.3238 8 15.5999 8C15.876 8 16.0999 7.77615 16.0999 7.5C16.0999 5.73269 14.6672 4.3 12.8999 4.3H11.0999C9.33259 4.3 7.8999 5.73269 7.8999 7.5C7.8999 7.77615 8.12376 8 8.3999 8C8.67604 8 8.8999 7.77615 8.8999 7.5ZM5.7998 15.6V9.39999H18.1998V15.6C18.1998 17.0359 17.0357 18.2 15.5998 18.2H8.39981C6.96387 18.2 5.7998 17.0359 5.7998 15.6ZM4.7998 9.29999C4.7998 8.80294 5.20275 8.39999 5.6998 8.39999H18.2998C18.7969 8.39999 19.1998 8.80294 19.1998 9.29999V15.6C19.1998 17.5882 17.588 19.2 15.5998 19.2H8.39981C6.41158 19.2 4.7998 17.5882 4.7998 15.6V9.29999Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
            </span>
          </button>
          {isCartOpen && (
            <>
              <div
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black/30 z-40"
              ></div>
              <div className="absolute right-0 top-0 mt-3 w-72 bg-white border rounded-xl shadow-lg p-4 z-50">
                <h3 className="font-bold mb-2 font-Inter">سبد خرید</h3>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-sm font-Inter">
                    سبد خالی است
                  </p>
                ) : (
                  <ul className="space-y-2 max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-2 border-b pb-2"
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded"
                        />

                        <div className="flex-1">
                          <p className="text-sm font-semibold line-clamp-1 font-Inter">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            تعداد: {item.quantity || 1}
                          </p>
                        </div>

                        <span className="text-blue-600 font-bold text-sm">
                          ${item.price * (item.quantity || 1)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition font-Inter"
                        >
                          حذف
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-Inter">
                  ادامه خرید
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </header>
  );
}
