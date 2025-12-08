import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Banner() {
  return (
    <Carousel className="w-full max-w-screen-xl h-96  mb-20">
      <CarouselContent>
        <CarouselItem>
          <img
            src="src/assets/img/cream.jpg"
            className="w-full h-96 object-cover rounded-xl"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="src/assets/img/cosmetic1.jpg"
            className="w-full h-96 object-cover rounded-xl"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="src/assets/img/cosmetic2.jpg"
            className="w-full h-96 object-cover rounded-xl"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="src/assets/img/kitchen.jpg"
            className="w-full h-96 object-cover rounded-xl"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="src/assets/img/supplies.jpg"
            className="w-full h-96 object-cover rounded-xl"
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
