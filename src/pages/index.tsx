import { Inter } from "next/font/google";
import React from "react";
import Features from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Features />
    </>
  );
}
