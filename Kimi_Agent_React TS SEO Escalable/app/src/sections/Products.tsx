import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Ethiopia Yirgacheffe",
    description: "Notas florales de jazmín y bergamota con cuerpo sedoso",
    price: "$24.00",
    image: "/images/product-1.jpg",
  },
  {
    name: "Colombia Huila Supremo",
    description: "Chocolate negro, caramelo y acidez cítrica brillante",
    price: "$22.00",
    image: "/images/product-2.jpg",
  },
  {
    name: "Brasil Cerrado Mineiro",
    description: "Nueces tostadas, cacao y un final dulce persistente",
    price: "$20.00",
    image: "/images/product-3.jpg",
  },
  {
    name: "Goldneez Signature Blend",
    description: "Nuestra mezcla exclusiva: equilibrada, aromática y memorable",
    price: "$26.00",
    image: "/images/product-4.jpg",
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const title = sectionRef.current!.querySelector(".products-title");
      const subtitle = sectionRef.current!.querySelector(".products-subtitle");
      const cards = sectionRef.current!.querySelectorAll(".product-card");

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 85%", once: true },
          }
        );
      }

      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: subtitle, start: "top 85%", once: true },
          }
        );
      }

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8,
            delay: 0.3 + i * 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative bg-aluminum dot-pattern-light section-padding"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="products-title font-cinzel text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1] tracking-[-0.03em] opacity-0">
            Nuestros Cafés
          </h2>
          <p className="products-subtitle font-quattrocento uppercase tracking-[0.05em] text-aluminum-dark text-sm sm:text-base mt-4 opacity-0">
            Selección de origen único, tostados artesanalmente
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="product-card bg-white rounded-2xl p-5 lg:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] group hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 opacity-0"
            >
              {/* Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 lg:mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="font-cinzel text-black text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                {product.name}
              </h3>
              <p className="font-quattrocento text-aluminum-dark text-sm leading-[1.6] mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-quattrocento font-bold text-amber text-lg sm:text-xl lg:text-2xl">
                  {product.price}
                </span>
                <button
                  className="flex items-center gap-2 bg-black text-aluminum px-4 py-2.5 lg:px-6 rounded-lg text-sm font-quattrocento font-bold hover:bg-amber hover:text-black transition-colors duration-300"
                  aria-label={`Comprar ${product.name}`}
                >
                  <ShoppingCart size={16} />
                  <span className="hidden sm:inline">Comprar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
