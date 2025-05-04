export default function Contact() {
  return (
    <>
      <section id="hero">
        <h1 className="mt-4.5 text-center text-4xl text-gray-800">
          Contact Us!📱
        </h1>
        <form className="flex gap-2 mx-auto w-[20%] mt-3">
          <input
            className="w-full p-2 border border-gray-200 outline-gray-400"
            type="text"
            placeholder="subscribe to our email..."
          />
          <button className="rounded px-4 py-2 shadow bg-blue-600 text-white">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
