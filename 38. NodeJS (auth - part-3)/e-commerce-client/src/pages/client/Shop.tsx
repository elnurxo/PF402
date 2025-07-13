const Shop = () => {
  
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-16 text-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Shop Our Products
        </h1>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/2 px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Sort */}
          <select className="w-full md:w-1/4 px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Best Selling</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
            >
              <div className="w-full h-40 bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-blue-400">Image</span>
              </div>
              <h2 className="text-lg font-semibold text-blue-800 mb-1">
                Product Name
              </h2>
              <p className="text-sm text-blue-600 mb-2">
                Short product description goes here.
              </p>
              <span className="font-bold text-blue-700">$29.99</span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="px-4 py-2 rounded-xl bg-white border border-blue-300 text-blue-700 hover:bg-blue-100">
            Previous
          </button>
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className="w-10 h-10 rounded-xl bg-white border border-blue-300 text-blue-700 hover:bg-blue-100"
            >
              {num}
            </button>
          ))}
          <button className="px-4 py-2 rounded-xl bg-white border border-blue-300 text-blue-700 hover:bg-blue-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
