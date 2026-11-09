import type { Metadata } from "next";
import { personal } from "@/config/portfolio";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { About, Services, Skills } from "@/components/sections/about";
import { FeaturedWork } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = pageMetadata({
  title: `${personal.name} — ${personal.role}`,
  description: personal.seo.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <FeaturedWork />
      <Experience />
      <Contact />
    </>
  );
}
