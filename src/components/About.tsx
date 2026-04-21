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
                I Am Data Scientist
              </h4>

              <div className="space-y-4">
                <p className="w-full font-josefin text-white/90 text-sm sm:text-[15px] leading-relaxed">
                  Senior Data Scientist with 7+ years of experience designing
                  and building risk modeling and fraud detection solutions
                  across fintech, insurance, and e-commerce industries.
                  Specialized in credit scoring, gradient boosting models, and
                  logistic regression for large-scale business decision systems.
                  Demonstrated experience in translating analytical models into
                  measurable financial impact. Currently focused on expanding
                  production-oriented ML capabilities through backend system
                  development and API-based model integration, bridging data
                  science with scalable application systems. Core Expertise:
                  <ul>
                    <li>Risk & Fraud Modeling</li>
                    <li>Credit Scoring Systems</li>
                    <li>Feature Engineering & Model Validation</li>
                    <li>API-based ML Integration</li>
                    <li>SQL & Data Pipelines</li>
                  </ul>
                  Tech Stack: Python, SQL, XGBoost, Scikit-learn, PostgreSQL,
                  FastAPI, REST-based ML Integration, Git, AWS (basic),
                  TypeScript (learning), JavaScript (learning)
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
