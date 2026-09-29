'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const content = sectionRef.current?.querySelectorAll('.exp-content');
    
    content?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/experience.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="max-w-2xl">
          <h2 className="exp-content font-cinzel text-amber text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-[-0.03em] mb-8">
            La Experiencia
            <br />
            Goldneez
          </h2>
          <p className="exp-content font-quattrocento text-aluminum text-lg lg:text-xl leading-[1.8] mb-8">
            Más que un café, creamos momentos. Cada visita a Goldneez es un viaje sensorial
            donde el aroma del grano recién tostado se encuentra con la calidez de un espacio
            diseñado para compartir.
          </p>
          <p className="exp-content font-quattrocento text-aluminum text-lg lg:text-xl leading-[1.8] mb-8">
            Nuestro equipo de baristas expertos está comprometido a preparar cada taza
            con la precisión y dedicación que solo los verdaderos amantes del café pueden ofrecer.
          </p>
          <div className="exp-content">
            <button className="btn-primary">
              Visítanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;