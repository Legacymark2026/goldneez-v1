"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2018",
    title: "El Origen",
    description: "Nacimos con la visión de transformar el ecosistema digital. Un equipo pequeño, pero con ambiciones globales y una creatividad inagotable.",
  },
  {
    year: "2020",
    title: "Expansión y Resiliencia",
    description: "Adaptamos nuestras estrategias para liderar en tiempos de cambio, multiplicando nuestra cartera de clientes y abriendo nuevas fronteras.",
  },
  {
    year: "2023",
    title: "Innovación Tecnológica",
    description: "Integramos Inteligencia Artificial y metodologías ágiles avanzadas en el núcleo de nuestras operaciones, creando productos disruptivos.",
  },
  {
    year: "2026",
    title: "Liderazgo Global",
    description: "Consolidamos nuestra presencia internacional, marcando el estándar en creatividad, diseño y soluciones tecnológicas escalables.",
  }
];

export function CorporateTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="py-32 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Cinematic ambient lights */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-teal-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 animate-gradient-x">Evolución</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl"
          >
            Un recorrido forjado con pasión, innovación y el compromiso inquebrantable de redefinir lo posible.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 rounded-full origin-top">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="w-full h-full bg-gradient-to-b from-teal-400 via-emerald-400 to-cyan-500 rounded-full origin-top shadow-[0_0_20px_rgba(45,212,191,0.6)]"
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-32 relative">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full hidden md:block" />

                  {/* Center Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 z-10 flex items-center justify-center">
                     <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                        className="w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,1)]"
                     />
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
                  >
                    <div className="group relative bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-500 overflow-hidden transform-gpu hover:-translate-y-2">
                      {/* Cinematic hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <h3 className="text-6xl font-black text-white mb-2 font-mono opacity-[0.03] group-hover:opacity-10 group-hover:text-teal-400 transition-all duration-500 absolute -top-4 -right-4 -rotate-6 select-none pointer-events-none">
                        {item.year}
                      </h3>
                      
                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full text-sm font-bold tracking-widest mb-6 shadow-inner">
                          {item.year}
                        </span>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-teal-50 transition-colors">{item.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
