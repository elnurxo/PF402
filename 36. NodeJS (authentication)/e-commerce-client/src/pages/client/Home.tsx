import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "Summer Sale is Here!",
    description: "Up to 50% off on selected products.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out the latest trends in fashion.",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/938/443/non_2x/christmas-sale-purple-discount-banner-with-garland-present-and-cookies-with-a-glass-of-milk-for-santa-claus-discount-banner-with-winter-night-landscape-vector.jpg",
  },
  {
    id: 3,
    title: "Exclusive Deals",
    description: "Members get early access to discounts.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/048/909/278/small_2x/glamour-girl-showing-plastic-credit-card-and-shopping-bags-pucker-lips-for-kiss-standing-happy-against-blue-background-photo.jpg",
  },
];

const Home = () => {
  return (
    <div>
      {/* HERO SLIDER */}
      <section className="w-full">
        <Swiper
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[666px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/50 p-8 rounded-lg text-center max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered in 2-3 days nationwide.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
            <p className="text-gray-600">
              Multiple payment methods with full encryption.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
            <p className="text-gray-600">
              24/7 support to help you with any queries or issues.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                “Bazaar has changed the way I shop online. The UI is amazing and
                delivery is super fast!”
              </p>
              <h4 className="font-semibold">— Aydan M.</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                “Great service, affordable prices and their customer support is
                on point.”
              </p>
              <h4 className="font-semibold">— Emin A.</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                “Love their new collection. Highly recommend this platform!”
              </p>
              <h4 className="font-semibold">— Lala K.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS SECTION */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow p-4">
              <div className="h-48 bg-gray-200 rounded mb-4" />
              <h3 className="text-lg font-semibold mb-1">Product Name</h3>
              <p className="text-sm text-gray-500 mb-2">Category</p>
              <p className="font-bold text-blue-600">$49.99</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
