import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-16 text-blue-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About Us
        </h1>
        <p className="text-center text-lg md:text-xl mb-10 text-blue-700">
          Discover who we are, what drives us, and why you can trust our
          products.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full">
            <img
              src="https://traveleatblog.com/wp-content/uploads/2024/07/Experience-the-Grand-Bazaar.jpg"
              alt="About our store"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Our Story
            </h2>
            <p className="mb-4 text-blue-700 leading-relaxed">
              We started with a simple idea: to bring quality and style to your
              fingertips. Our team is passionate about delivering products that
              not only look great but also stand the test of time.
            </p>
            <p className="mb-4 text-blue-700 leading-relaxed">
              Whether you're shopping for fashion, tech, or home essentials,
              we’ve curated a premium selection just for you. Customer happiness
              is at the heart of everything we do.
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 shadow-md">
              <Link to={"/shop"}>Explore Our Products</Link>
            </button>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "We handpick every product to ensure top-tier materials and craftsmanship.",
              },
              {
                title: "Customer Focus",
                desc: "Your satisfaction drives our mission. We’re here to support you every step of the way.",
              },
              {
                title: "Fast Shipping",
                desc: "Reliable and fast delivery ensures you get what you need, when you need it.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {item.title}
                </h3>
                <p className="text-blue-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
