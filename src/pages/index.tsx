import { Inter } from "next/font/google";
import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Surah from "./surah";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Features />
    </>
  );
}
