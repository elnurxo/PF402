import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { getAll } from "../../services/commonRequest";
import { Endpoints } from "../../enums/endpoints";
import type { Slider } from "../../types/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  const [slides, setSliders] = useState<Slider[]>([]);
  useEffect(() => {
    getAll<{
      data: [];
      message: string;
    }>(Endpoints.sliders).then((resp) => {
      setSliders([...resp.data]);
    });
  }, []);
  return (
    <div>
      {/* HERO SLIDER */}
      <section className="w-full">
        <Swiper
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: false }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[666px]"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${slide.url})` }}
              >
                <div className="bg-black/50 p-8 rounded-lg text-center max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.name}
                  </h2>
                  <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                    <Link to={"/shop"}>Shop Now</Link>
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
