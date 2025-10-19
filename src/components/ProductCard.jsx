export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col items-center bg-primary h-72">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-32 h-32 object-contain mb-3"
      />
      <h3 className="text-sm font-semibold text-gray-700 text-center line-clamp-2">
        {product.title}
      </h3>
      <p className="text-blue-600 font-bold my-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className=" text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition bg-blue-500  "
      >
        Add to cart
      </button>
    </div>
  );
}
