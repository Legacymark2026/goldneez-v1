import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements = ref.current!.querySelectorAll("[data-animate]");
      
      elements.forEach((el) => {
        const animation = el.getAttribute("data-animate");
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        const duration = parseFloat(el.getAttribute("data-duration") || "0.8");
        const stagger = parseFloat(el.getAttribute("data-stagger") || "0");

        if (animation === "fade-up") {
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        } else if (animation === "fade-up-stagger") {
          const children = el.children;
          gsap.fromTo(
            children,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        } else if (animation === "scale-in") {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        } else if (animation === "split-text") {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, rotateX: 15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useCountUp = (end: number, duration: number = 2) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { innerText: "0" },
        {
          innerText: end,
          duration,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [end, duration]);

  return ref;
};

export default useScrollAnimation;
