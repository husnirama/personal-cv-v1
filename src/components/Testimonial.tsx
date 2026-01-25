// import { RiDoubleQuotesL } from "react-icons/ri";
// import { useCallback, useEffect, useState, useMemo } from "react";
// import useEmblaCarousel from "embla-carousel-react";

// type Testimonial = {
//   text: string;
//   name: string;
//   role: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     text: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy, when an unknown printer took a galley of type a type specimen book.",
//     name: "Alex Smith",
//     role: "Envato Author",
//   },
//   {
//     text: "Working with Husni was smooth and fast. The UI feels premium, the code is clean, and the delivery exceeded expectations.",
//     name: "Sarah Johnson",
//     role: "Product Manager",
//   },
//   {
//     text: "Great communication, strong technical skills, and a real eye for design details. Highly recommended.",
//     name: "Michael Lee",
//     role: "CTO",
//   },
// ];

// function Testimonial() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);

//     return () => {
//       emblaApi.off("select", onSelect);
//       emblaApi.off("reInit", onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   const dots = useMemo(() => {
//     return emblaApi ? emblaApi.scrollSnapList() : [];
//   }, [emblaApi]);

//   const scrollTo = useCallback(
//     (index: number) => emblaApi?.scrollTo(index),
//     [emblaApi],
//   );

//   return (
//     <section id="testimonial">
//       <div className="h-[calc(50vh-55px)] bg-[url('/rodeo-project-management-software-lPP1ns8krX8-unsplash.jpg')]">
//         <div className="h-50% mx-[285px] px-7.5 pb-25 pt-6">
//           <div className="h-full flex justify-center">
//             <div id="content" className=" w-full">
//               <RiDoubleQuotesL className="w-10 h-10 rounded-full border-2 border-white text-white mx-auto mb-10" />
//               <h4 className="text-center font-josefin font-bold text-[36px] text-white">
//                 Testimonials
//               </h4>
//               {/* embla viewport */}
//               <div className="mt-10 overflow-hidden" ref={emblaRef}>
//                 {/* embla container */}
//                 <div className="flex">
//                   {testimonials.map((t, i) => (
//                     <div key={i} className="flex-[0_0_100%] px-4 text-center">
//                       <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 font-open font-medium text-[18px]">
//                         {t.text}
//                       </p>

//                       <p className="mt-8 text-sm text-white/80 text-center">
//                         <span className="font-semibold text-white">
//                           {t.name}
//                         </span>
//                         <span className="mx-2 text-white/30">|</span>
//                         <span className="text-white/60">{t.role}</span>
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* dots */}
//               <div className="pt-3 flex items-center justify-center gap-3">
//                 {dots.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => scrollTo(i)}
//                     className={`h-2 w-2 rounded-full transition-all ${
//                       i === selectedIndex
//                         ? "bg-amber-400"
//                         : "bg-white/20 hover:bg-white/40"
//                     }`}
//                     aria-label={`Go to slide ${i + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Testimonial;

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
    text: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy, when an unknown printer took a galley of type a type specimen book.",
    name: "Alex Smith",
    role: "Envato Author",
  },
  {
    text: "Working with Husni was smooth and fast. The UI feels premium, the code is clean, and the delivery exceeded expectations.",
    name: "Sarah Johnson",
    role: "Product Manager",
  },
  {
    text: "Great communication, strong technical skills, and a real eye for design details. Highly recommended.",
    name: "Michael Lee",
    role: "CTO",
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
            Testimonials
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
