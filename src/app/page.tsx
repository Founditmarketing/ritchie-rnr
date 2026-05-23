import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Manifesto } from "@/components/Manifesto";
import { Vision } from "@/components/Vision";
import { Service } from "@/components/Service";
import { Media } from "@/components/Media";
import { Support } from "@/components/Support";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionIndex } from "@/components/SectionIndex";

export default function Page() {
  return (
    <>
      <Nav />
      <SectionIndex />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Vision />
        <Service />
        <Media />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
