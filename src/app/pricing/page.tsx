import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Pricing from "@/sections/Pricing";

import Head from 'next/head';

export default function Projects() {
  return <>
 <Head>
        <title>Top Projects for College Students | ProjectVerse</title>
        <meta
          name="description"
          content="Explore top AI and machine learning projects for students. Free source code and deployment guide included."
        />
        <link rel="canonical" href="https://projectverse.shop/projects" />
      </Head>
  <Header></Header>
  <Pricing />
  <Footer/>
 
  </>;
}
