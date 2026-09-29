'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Ethiopia Yirgacheffe',
    description: 'Notas florales de jazmín y bergamota con cuerpo sedoso',
    price: '$24.00',
    image: '/images/product-1.jpg',
  },
  {
    id: 2,
    name: 'Colombia Huila Supremo',
    description: 'Chocolate negro, caramelo y acidez cítrica brillante',
    price: '$22.00',
    image: '/images/product-2.jpg',
  },
  {
    id: 3,
    name: 'Brasil Cerrado Mineiro',
    description: 'Nueces tostadas, cacao y un final dulce persistente',
    price: '$20.00',
    image: '/images/product-3.jpg',
  },
  {
    id: 4,
    name: 'Goldneez Signature Blend',
    description: 'Nuestra mezcla exclusiva: equilibrada, aromática y memorable',
    price: '$26.00',
    image: '/images/product-4.jpg',
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const cards = sectionRef.current?.querySelectorAll('.product-card');
    
    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative bg-black section-padding"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-cinzel text-amber text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-[-0.03em] mb-6"
          >
            Nuestros
            <br />
            Cafés
          </h2>
          <p className="font-quattrocento text-aluminum/70 text-lg max-w-2xl mx-auto">
            Selección premium de granos de origen único, tostados artesanalmente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group relative bg-aluminum/5 border border-aluminum/10 rounded-2xl overflow-hidden hover:border-amber/30 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-aluminum text-xl mb-2 group-hover:text-amber transition-colors">
                  {product.name}
                </h3>
                <p className="font-quattrocento text-aluminum/60 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-amber text-2xl">{product.price}</span>
                  <button className="btn-primary text-xs py-2 px-4">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;