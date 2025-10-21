import { Carousel } from "flowbite-react";

export default function Banner() {
  return (
    <div className=" mb-20  max-w-screen-xl w-full h-96">
      <Carousel>
        <img src="src/assets/img/cream.jpg" alt="..." />
        <img src="src/assets/img/cosmetic1.jpg" alt="..." />
        <img src="src/assets/img/cosmetic2.jpg" alt="..." />
        <img src="src/assets/img/kitchen.jpg" alt="..." />
        <img src="src/assets/img/supplies.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
