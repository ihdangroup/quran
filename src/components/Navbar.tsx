import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="items-center flex w-full bg-transparent text-sm py-4 px-8 lg:px-16">
      <h1 className="font-extrabold text-xl">
        <Link href="/">Equran.id</Link>
      </h1>
      <ul className="flex justify-around w-2/3 lg:w-1/3">
        <li>
          <Link href="/surah">Surah</Link>
        </li>
        <li>Tafsir</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
