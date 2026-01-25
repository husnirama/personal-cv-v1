// import { useEffect, useState } from "react";

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       id="header"
//       className={`w-full h-20 fixed transition-all duration-300
//         ${scrolled ? "bg-[#131414]" : "bg-black/30 backdrop-blur-sm"}`}
//     >
//       <nav className="h-full flex justify-center mx-[285px] px-7.5 py-2">
//         <ul className="w-full flex justify-between items-center">
//           <li className="text-[30px] font-700 font-josefin text-white">
//             <a href="#">Husni Ramanda</a>
//           </li>
//           <li>
//             <ul className="flex justify-center gap-10 text-white text-[20px] font-open">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#about">About</a>
//               </li>
//               <li>
//                 <a href="#skill">Skill</a>
//               </li>
//               <li>
//                 <a href="#portfolio">Portfolio</a>
//               </li>
//               <li>
//                 <a href="#testimonial">Testimonials</a>
//               </li>
//               <li>
//                 <a href="#contact">Contact</a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </nav>
//     </section>
//   );
// }
// export default Header;

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      id="header"
      className={[
        "fixed inset-x-0 top-0 z-[999] h-20 transition-all duration-300",
        scrolled ? "bg-[#131414] backdrop-blur-md" : "bg-black backdrop-blur-0",
      ].join(" ")}
    >
      <nav className="h-full">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl sm:text-2xl font-josefin font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            onClick={closeMenu}
          >
            Husni Ramanda
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8 text-white text-base lg:text-lg font-open drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white/80 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20 transition drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={[
            "md:hidden fixed inset-x-0 top-20 z-50 transition-all duration-300",
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="rounded-2xl border border-white/10 bg-[#131414]/95 p-4 shadow-xl">
              <ul className="flex flex-col gap-3 text-white font-open">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 hover:bg-white/10 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
