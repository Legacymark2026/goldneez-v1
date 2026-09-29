'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  useGSAP(() => {
    const content = sectionRef.current?.querySelectorAll('.newsletter-content');
    
    content?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
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
      id="newsletter"
      ref={sectionRef}
      className="relative bg-amber section-padding"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="newsletter-content font-cinzel text-black text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-[-0.03em] mb-6">
            Únete a la
            <br />
            Comunidad Goldneez
          </h2>
          <p className="newsletter-content font-quattrocento text-black/70 text-lg mb-8 max-w-xl mx-auto">
            Recibe ofertas exclusivas, consejos de barista y las últimas noticias sobre nuestros cafés.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="newsletter-content flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 bg-black/10 border border-black/20 rounded-none text-black placeholder:text-black/50 focus:outline-none focus:border-black/40"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-black text-amber font-quattrocento font-bold uppercase tracking-wider hover:bg-black/90 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          ) : (
            <div className="newsletter-content">
              <p className="font-cinzel text-black text-2xl">
                ¡Gracias por unido! 🌟
              </p>
            </div>
          )}

          <p className="newsletter-content font-quattrocento text-black/50 text-sm mt-4">
            No spam. Solo contenido de calidad sobre café.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;