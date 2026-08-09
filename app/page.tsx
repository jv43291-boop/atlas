import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
      <main id="conteudo">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
  );
}
