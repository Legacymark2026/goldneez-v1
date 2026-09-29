'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'María González',
    role: 'Cliente frecuente',
    text: 'El café de Goldneez ha transformado mis mañanas. La calidad es incomparable.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    role: 'Chef restaurante',
    text: 'Desde que descubrí Goldneez, mi restaurante solo sirve su café. Es excepcional.',
    rating: 5,
  },
  {
    name: 'Ana López',
    role: 'Bloguera de café',
    text: 'La experiencia de compra y el producto son igualmente extraordinarios. Totalmente recomendada.',
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    
    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative bg-black section-padding"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-amber text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-[-0.03em] mb-6">
            Lo que dicen
            <br />
            Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card relative bg-aluminum/5 border border-aluminum/10 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-amber">★</span>
                ))}
              </div>
              <p className="font-quattrocento text-aluminum/80 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-cinzel text-aluminum text-lg">{testimonial.name}</p>
                <p className="font-quattrocento text-aluminum/50 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;