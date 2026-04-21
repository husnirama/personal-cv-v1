// import { Typewriter } from "react-simple-typewriter";

// function Hero() {
//   return (
//     <section id="hero">
//       {/* h-[calc(100vh-80px)] */}
//       <div className="bg-[url('/background-selfie.png')] -z-50 h-screen flex flex-col justify-center items-center">
//         <h2 className="text-[40px] text-center font-200 font-josefin text-white">
//           I Love To Build Apps
//         </h2>
//         <h1 className="text-[70px] text-center font-300 font-josefin text-white">
//           I Am{" "}
//           <span className="font-extrabold">
//             <Typewriter
//               words={["a Data Scientist", "a Web Developer", "Rama"]}
//               loop
//               cursor
//               typeSpeed={80}
//               deleteSpeed={50}
//               delaySpeed={1200}
//             />
//             ;
//           </span>
//         </h1>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div
        className="
        bg-[url('/background-selfie.png')] sm:bg-[top] -z-50 h-screen flex flex-col justify-center items-center
          px-4 sm:px-6 text-center
        "
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-josefin text-white/90">
          I Love To Build Apps
        </h2>

        <h1 className="mt-2 text-4xl sm:text-6xl lg:text-7xl font-josefin text-white">
          I Am{" "}
          <span className="font-extrabold">
            <Typewriter
              words={["a Data Scientist", "a Web Developer", "Rama"]}
              loop
              cursor
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
            ;
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
