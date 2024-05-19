import Head from "next/head";
import React from "react";
import Footer from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Landing Page Al-Qur&apos;an</title>
        <meta name="description" content="Landing page untuk Al-Qur'an" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
