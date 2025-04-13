import { CallToAction } from "@/sections/CallToAction";

import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import ProjectsPage from "@/sections/Samples";
import Head from 'next/head';


export default function Projects() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": "ProjectVerse College Project",
    "programmingLanguage": "NextJS",
    "applicationCategory": "AI/ML",
    "author": {
      "@type": "Organization",
      "name": "ProjectVerse"
    },
    "url": "https://projectverse.shop/projects",
    "description": "Build the best college project using Generative AI and Next JS. Ideal for college students."
  };
  return <>
<Head>
        <title>Top Projects for College Students | ProjectVerse</title>
        <meta
          name="description"
          content="Explore top AI, Web and machine learning projects for students. Free source code and deployment guide included."
        />
        <link rel="canonical" href="https://projectverse.shop/projects" />
      </Head>
  <Header></Header>
  <ProjectsPage />
  <Footer/>
 
  </>;
}
