// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
// import { LuGithub } from "react-icons/lu";
// import { RiTelegram2Line } from "react-icons/ri";
// import { useCallback, useEffect } from "react";

// function About() {
//   const cvUrl = "/cv/CV - HUSNI RAMANDA LUBIS.pdf";
//   useEffect(() => {
//     const prefetch = async () => {
//       try {
//         await fetch(cvUrl, { method: "GET" });
//       } catch {
//         // ignore prefetch errors (CV may not exist yet)
//       }
//     };
//     prefetch();
//   }, [cvUrl]);

//   const downloadCV = useCallback(async () => {
//     try {
//       const res = await fetch(cvUrl);
//       if (!res.ok) throw new Error("Failed to fetch CV");

//       const blob = await res.blob();
//       const url = window.URL.createObjectURL(blob);

//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "Husni-Rama-CV.pdf";
//       document.body.appendChild(a);
//       a.click();
//       a.remove();

//       window.URL.revokeObjectURL(url);
//     } catch {
//       alert("CV file not found yet. Please add it to public/cv/.");
//     }
//   }, [cvUrl]);

//   return (
//     <section id="about" className="w-full scroll-mt-20">
//       <div className="h-[calc(100vh-80px)] bg-[#131414]">
//         <div className="h-full mx-[285px] px-7.5 pb-25 pt-15">
//           <div className="h-full flex justify-between items-center">
//             <div className="h-full w-full grid grid-cols-2 justify-between gap-8  overflow-hidden">
//               <div>
//                 <img src="about-photo.png" alt="" className="w-221" />
//               </div>
//               <div>
//                 <h4 className="font-josefin font-extrabold text-white text-left text-2xl mb-7.5">
//                   I Am Data Scientist & Web Developer
//                 </h4>
//                 <p className="w-full mb-[15px] font-josefin text-white text-[15px]">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Saepe, impedit? Optio minima dolores eos incidunt placeat?
//                   Soluta ex temporibus adipisci ab sequi, nobis aperiam eius
//                   suscipit placeat asperiores quidem atque? Lorem ipsum dolor
//                   sit amet consectetur adipisicing elit. Saepe, impedit? Optio
//                   minima dolores eos incidunt placeat? Soluta ex temporibus
//                   adipisci ab sequi, nobis aperiam eius suscipit placeat
//                   asperiores quidem atque?
//                 </p>
//                 <p className="w-full mb-[15px] font-josefin text-white text-[15px]">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Omnis veritatis, officia voluptates quisquam qui eveniet
//                   consequatur necessitatibus tempore corporis voluptas molestias
//                   ipsam et excepturi in voluptatem magnam nemo soluta
//                   reiciendis?
//                 </p>
//                 <p className="w-[440px] mb-[50px] font-josefin text-white text-[15px]">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Omnis veritatis, officia voluptates quisquam qui eveniet
//                   consequatur necessitatibus tempore corporis voluptas molestias
//                   ipsam et excepturi in voluptatem magnam nemo soluta
//                   reiciendis?
//                 </p>
//                 <div className="w-110 h-15 flex gap-4 mb-10">
//                   <a
//                     href="https://www.linkedin.com/in/husni-ramanda-0b3521108/"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <FaLinkedin className="text-black bg-white h-[30px] w-[30px]" />
//                   </a>
//                   <a
//                     href="https://x.com/HusniLubis9"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <FaSquareXTwitter className="text-black bg-white h-[30px] w-[30px]" />
//                   </a>
//                   <a
//                     href="https://wa.me/6285871439193"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <FaWhatsapp className="text-white bg-black h-[30px] w-[30px] border-2" />
//                   </a>
//                   <a
//                     href="https://github.com/husnirama"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     <LuGithub className="text-white bg-black h-[30px] w-[30px] border-2" />
//                   </a>
//                 </div>
//                 <div className="w-[440px] flex gap-4 mt-7.5 text-white text-center text-[12px] font-bold tracking-wider font-open">
//                   <button
//                     onClick={() => {
//                       document.getElementById("contact")?.scrollIntoView({
//                         behavior: "smooth",
//                       });
//                     }}
//                     className="group relative w-[130px] h-10 border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent"
//                   >
//                     <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
//                       HIRE ME
//                     </span>
//                     <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
//                       <RiTelegram2Line className="text-white text-xl" />
//                     </span>
//                   </button>
//                   <button
//                     onClick={downloadCV}
//                     className="group relative w-[130px] h-10 border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent"
//                   >
//                     <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
//                       DOWNLOAD CV
//                     </span>
//                     <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
//                       <FaDownload className="text-white text-xl" />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiTelegram2Line } from "react-icons/ri";
import { useCallback, useEffect } from "react";

function About() {
  const cvUrl = "/cv/CV - HUSNI RAMANDA LUBIS.pdf";

  useEffect(() => {
    const prefetch = async () => {
      try {
        await fetch(cvUrl, { method: "GET" });
      } catch {
        // ignore prefetch errors (CV may not exist yet)
      }
    };
    prefetch();
  }, [cvUrl]);

  const downloadCV = useCallback(async () => {
    try {
      const res = await fetch(cvUrl);
      if (!res.ok) throw new Error("Failed to fetch CV");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Husni-Rama-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch {
      alert("CV file not found yet. Please add it to public/cv/.");
    }
  }, [cvUrl]);

  return (
    <section id="about" className="w-full scroll-mt-10">
      <div className="bg-[#131414]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:gap-12 md:grid-cols-2 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <img
                src="about-photo.png"
                alt="About"
                className="w-full max-w-[380px] sm:max-w-[460px] md:max-w-none rounded-2xl object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h4 className="font-josefin font-extrabold text-white text-left text-2xl sm:text-3xl mb-6">
                I Am Data Scientist & Web Developer
              </h4>

              <div className="space-y-4">
                <p className="w-full font-josefin text-white/90 text-sm sm:text-[15px] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, impedit? Optio minima dolores eos incidunt placeat?
                  Soluta ex temporibus adipisci ab sequi, nobis aperiam eius
                  suscipit placeat asperiores quidem atque? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Saepe, impedit? Optio
                  minima dolores eos incidunt placeat? Soluta ex temporibus
                  adipisci ab sequi, nobis aperiam eius suscipit placeat
                  asperiores quidem atque?
                </p>

                <p className="w-full font-josefin text-white/90 text-sm sm:text-[15px] leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis veritatis, officia voluptates quisquam qui eveniet
                  consequatur necessitatibus tempore corporis voluptas molestias
                  ipsam et excepturi in voluptatem magnam nemo soluta
                  reiciendis?
                </p>

                <p className="w-full md:w-[440px] font-josefin text-white/90 text-sm sm:text-[15px] leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis veritatis, officia voluptates quisquam qui eveniet
                  consequatur necessitatibus tempore corporis voluptas molestias
                  ipsam et excepturi in voluptatem magnam nemo soluta
                  reiciendis?
                </p>
              </div>

              {/* Social */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/husni-ramanda-0b3521108/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-black bg-white h-[34px] w-[34px] rounded" />
                </a>
                <a
                  href="https://x.com/HusniLubis9"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="X / Twitter"
                >
                  <FaSquareXTwitter className="text-black bg-white h-[34px] w-[34px] rounded" />
                </a>
                <a
                  href="https://wa.me/6285871439193"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white bg-black h-[34px] w-[34px] rounded border-2" />
                </a>
                <a
                  href="https://github.com/husnirama"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <LuGithub className="text-white bg-black h-[34px] w-[34px] rounded border-2" />
                </a>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 text-white text-center text-[12px] font-bold tracking-wider font-open">
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="group relative w-full sm:w-[160px] h-10 border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                    HIRE ME
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <RiTelegram2Line className="text-white text-xl" />
                  </span>
                </button>

                <button
                  onClick={downloadCV}
                  className="group relative w-full sm:w-[160px] h-10 border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                    DOWNLOAD CV
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <FaDownload className="text-white text-xl" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
