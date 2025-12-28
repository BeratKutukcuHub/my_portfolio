import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  
  return (
    <section className="relative min-h-[100dvh] bg-black text-white flex items-center justify-center text-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi ! I'm Berat.
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Backend-focused Full Stack Developer creating scalable and maintainable web applications.
        </p>
        <Link
          to={"aboutme"}
          className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition"
        >
          MORE ABOUT ME
        </Link>
      </div>
    </section>
  );
};

export default Hero;