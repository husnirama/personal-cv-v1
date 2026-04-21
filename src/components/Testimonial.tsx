import { RiDoubleQuotesL } from "react-icons/ri";
import { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Built production-grade credit scoring and fraud detection models across fintech, banking, and government systems, improving model performance (AUC +2–4%) and enabling large-scale risk decisioning.",
    name: "Production ML Systems",
    role: "Credit Risk & Fraud Detection",
  },
  {
    text: "Designed and developed a full-stack event management platform with REST API, PostgreSQL (Supabase), Prisma ORM, Redis caching (Upstash), and JWT authentication, focusing on performance and scalability.",
    name: "Full-Stack System Design",
    role: "EventHub Platform",
  },
  {
    text: "Delivered multiple Proof-of-Concept analytics projects for financial institutions, contributing to successful model adoption and real-world implementation in risk scoring systems.",
    name: "Applied Data Science",
    role: "PoC & Model Deployment",
  },
];

function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const dots = useMemo(
    () => (emblaApi ? emblaApi.scrollSnapList() : []),
    [emblaApi],
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <section id="testimonial" className="scroll-mt-24">
      <div className="bg-[url('/rodeo-project-management-software-lPP1ns8krX8-unsplash.jpg')] bg-cover bg-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <RiDoubleQuotesL className="w-10 h-10 rounded-full border-2 border-white text-white mx-auto mb-8" />

          <h4 className="text-center font-josefin font-bold text-3xl sm:text-[36px] text-white">
            Impact Highlights
          </h4>

          {/* embla viewport */}
          <div className="mt-8 overflow-hidden" ref={emblaRef}>
            {/* embla container */}
            <div className="flex">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] px-2 sm:px-4 text-center"
                >
                  <p className="mx-auto max-w-3xl text-base sm:text-lg leading-relaxed text-white/70 font-open font-medium">
                    {t.text}
                  </p>

                  <p className="mt-6 text-sm text-white/80 text-center">
                    <span className="font-semibold text-white">{t.name}</span>
                    <span className="mx-2 text-white/30">|</span>
                    <span className="text-white/60">{t.role}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="pt-5 flex items-center justify-center gap-3">
            {dots.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === selectedIndex
                    ? "bg-amber-400"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
