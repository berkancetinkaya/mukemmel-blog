import React from "react";
import Head from "next/head";
import Hero from '../../components/Hero';

const Header = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero/>
  </>
);

export default Header;
