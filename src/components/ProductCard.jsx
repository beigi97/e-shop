import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ProductCard({ product, addToCart }) {
  return (
    <Card className="w-full max-w-xs flex flex-col shadow hover:shadow-lg">
      <CardHeader className="pb-2 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-28 h-28 object-contain"
        />
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-2 flex-1">
        <CardTitle className="text-center text-sm line-clamp-2 min-h-[40px]  font-semibold text-gray-700 font-Inter">
          {product.title}
        </CardTitle>

        <p className="text-blue-600 font-bold text-sm">${product.price}</p>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          variant="blue"
          onClick={() => addToCart(product)}
          className="w-full rounded-xl transition  font-Inter"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
