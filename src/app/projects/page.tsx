import { CallToAction } from "@/sections/CallToAction";
import Head from 'next/head';
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Table from "@/sections/Table";


export default function Projects() {
  return <>
  <Head>
        <title>Top Projects for College Students | ProjectVerse</title>
        <meta
          name="description"
          content="Explore top Web Dev, Cloud and AI-ML projects for students. Free source code and deployment guide included."
        />
        <link rel="canonical" href="https://projectverse.shop/projects" />
      </Head>
  <Header></Header>
  <CallToAction></CallToAction>
  <Table />  
  <Footer/>
 
  </>;
}
