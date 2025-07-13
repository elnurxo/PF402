const Contact = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-16 text-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-3xl font-bold text-center mb-6">
          Get in Touch
        </h1>
        <p className="text-center text-md md:text-xl mb-6 text-blue-700">
          We'd love to hear from you. Fill out the form or find us on the map.
        </p>

        {/* Form and Map */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white h-[470px] p-6 rounded-2xl shadow-md space-y-4 overflow-y-auto">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Order Inquiry"
                className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300 shadow"
            >
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1519.7164368596384!2d49.850413838807725!3d40.37709779286155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scode%20academy!5e0!3m2!1sen!2saz!4v1751706194755!5m2!1sen!2saz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
