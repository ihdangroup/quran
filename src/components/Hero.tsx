import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Al-Qur&apos;an: Petunjuk Hidup
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Membaca, memahami, dan mengamalkan isi Al-Qur&apos;an
        </p>
        <Link
          href="/surah"
          className="bg-white text-gray-800 py-2 px-4 rounded-full font-semibold text-lg transition duration-300 hover:bg-gray-200"
        >
          Baca Al-Qur&apos;an
        </Link>
      </div>
    </div>
  );
};

export default Hero;
