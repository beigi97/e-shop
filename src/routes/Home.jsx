import { getProducts } from "../api/products";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
export async function loader() {
  const { products } = await getProducts();
  return { products };
}
export default function Home() {
  const { products } = useLoaderData();
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
