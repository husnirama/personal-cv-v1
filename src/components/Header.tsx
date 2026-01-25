import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="header"
      className={`w-full h-20 fixed transition-all duration-300
        ${scrolled ? "bg-[#131414]" : "bg-black/30 backdrop-blur-sm"}`}
    >
      <nav className="h-full flex justify-center mx-[285px] px-7.5 py-2">
        <ul className="w-full flex justify-between items-center">
          <li className="text-[30px] font-700 font-josefin text-white">
            Husni Ramanda
          </li>
          <li>
            <ul className="flex justify-center gap-10 text-white text-[20px] font-open">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonial">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
}
export default Header;
