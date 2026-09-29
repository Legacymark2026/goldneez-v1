'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Selección',
    description: 'Elegimos los mejores granos de origen único',
    image: '/images/process-1.jpg',
  },
  {
    number: '02',
    title: 'Tueste',
    description: 'Tostado artesanal en pequeños lotes',
    image: '/images/process-2.jpg',
  },
  {
    number: '03',
    title: 'Cata',
    description: 'Evaluación sensorial de cada cosecha',
    image: '/images/process-3.jpg',
  },
  {
    number: '04',
    title: 'Empaque',
    description: 'Envase premium para máxima frescura',
    image: '/images/process-4.jpg',
  },
  {
    number: '05',
    title: 'Entrega',
    description: 'Envío rápido a tu puerta',
    image: '/images/process-5.jpg',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = sectionRef.current?.querySelectorAll('.process-item');
    
    items?.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative bg-black section-padding"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-amber text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-[-0.03em] mb-6">
            Nuestro
            <br />
            Proceso
          </h2>
          <p className="font-quattrocento text-aluminum/70 text-lg max-w-2xl mx-auto">
            De la semilla a tu taza, cada paso está cuidadosamente controlado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-item group relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-4 left-4 font-cinzel text-amber/50 text-4xl">
                  {step.number}
                </span>
              </div>
              <h3 className="font-cinzel text-aluminum text-xl mb-2 group-hover:text-amber transition-colors">
                {step.title}
              </h3>
              <p className="font-quattrocento text-aluminum/60 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;