import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-krea-red selection:text-white">
      <CustomCursor />
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto border-x border-krea-border relative z-10">
        {/* Decorative Grid Lines / Coords */}
        <div className="absolute top-[-15px] left-0 text-[0.6rem] text-krea-gray opacity-50 font-mono">x: 0.00</div>
        <div className="absolute top-[-15px] right-0 text-[0.6rem] text-krea-gray opacity-50 font-mono">x: 100.00</div>

        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Partners />
        <Contact />
      </main>
    </div>
  );
}