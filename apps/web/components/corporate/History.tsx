'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll('.history-card');
    const texts = sectionRef.current?.querySelectorAll('.history-text');

    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i === 0 ? -60 : 60, rotateY: i === 0 ? -25 : 25 },
        {
          opacity: 1,
          x: 0,
          rotateY: i === 0 ? -15 : 15,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    texts?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3 + i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="relative bg-aluminum dot-pattern-light section-padding overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 perspective-1500">
            <div className="relative">
              <div
                className="history-card relative rounded-2xl overflow-hidden shadow-2xl preserve-3d will-change-transform transition-transform duration-600 hover:scale-[1.02]"
                style={{ transform: 'rotateY(-15deg)', transformStyle: 'preserve-3d' }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
                  aria-hidden="true"
                >
                  <source src="/videos/history-cafe.mp4" type="video/mp4" />
                </video>
              </div>

              <div
                className="history-card relative mt-[-40px] ml-[60px] lg:ml-[120px] rounded-2xl overflow-hidden shadow-2xl preserve-3d will-change-transform transition-transform duration-600 hover:scale-[1.02] max-w-[80%]"
                style={{ transform: 'rotateY(15deg)', transformStyle: 'preserve-3d' }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
                  aria-hidden="true"
                >
                  <source src="/videos/history-roast.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="history-text font-cinzel text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-[-0.03em] mb-8 lg:mb-10 opacity-0">
              Nuestra
              <br />
              Historia
            </h2>
            <p className="history-text font-quattrocento text-black/80 text-base sm:text-lg lg:text-xl leading-[1.7] max-w-[480px] mb-6 opacity-0">
              En Goldneez, creamos recuerdos dorados a través de cada taza. Nuestra pasión por el café
              de especialidad nos lleva a seleccionar los mejores granos de origen único.
            </p>
            <p className="history-text font-quattrocento text-black/80 text-base sm:text-lg lg:text-xl leading-[1.7] max-w-[480px] mb-8 lg:mb-10 opacity-0">
              Más que una cafetería, somos un espacio donde el aroma, el sabor y la compañía se fusionan.
            </p>

            <div className="history-text opacity-0">
              <div className="w-[60px] h-[2px] bg-amber mb-6" />
              <p className="font-cinzel text-amber text-2xl sm:text-3xl lg:text-4xl leading-[1.1]">
                Creamos
                <br />
                recuerdos dorados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;