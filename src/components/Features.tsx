import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <div className="flex px-10 flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Selamat Datang di Aplikasi Al-Qur&apos;an
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
        Temukan dan pelajari ayat-ayat Al-Qur&apos;an dengan mudah menggunakan
        aplikasi kami.
      </p>
      <Link href="/surah">
        <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300">
          Mulai Explorasi
        </span>
      </Link>
      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">Dikembangkan oleh</p>
        <a href="https://ikhdandev.vercel.app">
          <span className="text-blue-500 hover:underline">
            Ikhdan Maghfuron
          </span>
        </a>
      </div>
    </div>
  );
};

export default Features;
