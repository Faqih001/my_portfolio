import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// Get data from dev.to API and filter out articles without cover image and sort randomly 
async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  // Check if response is ok
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // Parse response to JSON format 
  const data = await res.json();

  // Filter out articles without cover image and sort randomly 
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  // Return filtered data
  return filtered;
};

// Home component 
export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};