import Head from "next/head";
import React from "react";
import Features from "../Features";
import Footer from "../Footer";
import Hero from "../Hero";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Landing Page Al-Qur'an</title>
        <meta name="description" content="Landing page untuk Al-Qur'an" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
