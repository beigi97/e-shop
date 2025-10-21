import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

export default function Root() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header
        setFilteredProducts={setFilteredProducts}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
        cart={cart}
        setCart={setCart}
      />
      <main className="max-w-7xl mx-auto px-4">
        <Outlet
          context={{
            filteredProducts,
            searchQuery,
            page,
            setPage,
            cart,
            setCart,
          }}
        />
      </main>
    </>
  );
}
