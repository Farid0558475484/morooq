'use client'

import React from "react";
import Head from "next/head";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Morooq</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
}

export default Layout;
