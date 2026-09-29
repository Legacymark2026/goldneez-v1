import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import History from "./sections/History";
import Origin from "./sections/Origin";
import Products from "./sections/Products";
import Process from "./sections/Process";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      gsap.globalTimeline.timeScale(0);
      ScrollTrigger.defaults({ animation: undefined });
    }

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Skip to content link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber focus:text-black focus:px-6 focus:py-3 focus:font-quattrocento focus:font-bold focus:text-sm focus:uppercase"
      >
        Saltar al contenido
      </a>

      <Header />
      <main>
        <Hero />
        <History />
        <Origin />
        <Products />
        <Process />
        <Experience />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
