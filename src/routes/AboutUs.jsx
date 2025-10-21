export default function About() {
  return (
    <div className="  flex justify-between mt-16">
      <div className="w-3/4">
        <h1 className="text-3xl font-extrabold  text-blue-600 mb-8 font-Inter pl-5">
          About Us
        </h1>
        <p className="text-lg  text-gray-600 mb-4 px-10 font-Inter">
          Safe, fast and enjoyable shopping with
          <span className="font-semibold text-blue-600 font-Inter">MyShop</span>
        </p>

        <p className="text-gray-600 leading-relaxed text-lg  text-justify px-10 font-Inter">
          We are a modern online store that brings together the best products
          from around the world to provide you with a convenient, fast and
          enjoyable online shopping experience. We believe that online shopping
          should be simple, safe and smart. We started our activity with the aim
          of providing quality products at reasonable prices, and today we are
          proud to host thousands of satisfied customers.
        </p>
      </div>
      <div>
        <img
          src="src/assets/img/shop.jpg"
          alt="shop"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
