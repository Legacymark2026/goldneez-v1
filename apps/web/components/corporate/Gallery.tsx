'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Ambiente de cafetería' },
  { src: '/images/gallery-2.jpg', alt: 'Preparación de café' },
  { src: '/images/gallery-3.jpg', alt: 'Granos de café' },
  { src: '/images/gallery-4.jpg', alt: 'Experiencia del cliente' },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const images = sectionRef.current?.querySelectorAll('.gallery-item');
    
    images?.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative bg-aluminum section-padding"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-[-0.03em] mb-6">
            Nuestra
            <br />
            Galería
          </h2>
          <p className="font-quattrocento text-black/60 text-lg max-w-2xl mx-auto">
            Un recorrido visual por la experiencia Goldneez
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden rounded-2xl ${
                i === 0 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-video'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;