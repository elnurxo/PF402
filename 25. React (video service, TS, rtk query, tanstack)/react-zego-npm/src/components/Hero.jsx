import React from "react";
import { Video } from "lucide-react"; // optional icon

const Hero = () => {
  return (
    <section className="min-h-[30vh] flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Connect Instantly with{" "}
          <span className="text-yellow-300">Video Calls</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          High-quality, secure, and fast video communication for everyone,
          everywhere.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300">
          <Video className="w-5 h-5" />
          Start a Call
        </button>
      </div>
    </section>
  );
};

export default Hero;
