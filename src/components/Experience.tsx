import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

type IExperience = {
  year: string;
  title: string;
  company: string;
  location?: string;
  description: string[];
};

const experiences: IExperience[] = [
  {
    year: "Mar 2025 - Present",
    title: "Chief Executive Officer",
    company: "PT. Penyangga Pilar Konstruksi",
    location: "Bogor, Indonesia",
    description: [
      "- Built financial tracking and margin monitoring systems for multi-billion IDR infrastructure projects, improving cost visibility and reducing budget deviation by ~10% compared to manual reporting",
      "- Designed and implemented automated budgeting and reporting workflows, reducing manual reporting effort by ~30% and accelerating decision cycles",
      "- Developed real-time project profitability monitoring systems, enabling tracking of margin exposure across 6 concurrent projects",
      "- Standardized financial review processes, improving operational efficiency and decision-making speed by ~30%",
    ],
  },
  {
    year: "Mar 2024 - Mar 2025",
    title: "Data Scientist",
    company: "Tongdun Technology Indonesia",
    location: "Jakarta, Indonesia",
    description: [
      "- Built credit scoring models for Tier-1 Indonesian government banks using external data only, achieving ~80% AUC and enabling alternative risk assessment strategies",
      "- Developed fraud detection models for large-scale government systems",
      "- Designed feature engineering, validation, and monitoring pipelines for production ML systems handling hundreds of million+ transactions/month",
      "- Delivered 6+ Proof-of-Concept projects with ~90% conversion to implementation",
      "- Collaborated with engineering teams to integrate ML models into scalable decision systems",
    ],
  },
  {
    year: "Dec 2022 - Mar 2024",
    title: "Co-Founder",
    company: "PT. Penyangga Pilar Konstruksi",
    location: "Jakarta, Indonesia",
    description: [
      "- Designed and built a construction budget dashboard (VBA-based), reducing manual reporting effort by ~30%",
      "- Developed Python-based unit price calculator for real-time margin estimation, improving pricing accuracy by ~20%",
      "- Implemented structured cost monitoring systems for multi-billion IDR projects",
      "- Applied quantitative models to evaluate project profitability and financial risk exposure",
      "- Coordinated cross-functional execution across 5+ projects while maintaining ISO-compliant standards",
    ],
  },
  {
    year: "Nov 2020 - Dec 2022",
    title: "Senior Data Scientist",
    company: "Tokopedia",
    location: "Jakarta, Indonesia",
    description: [
      "- Developed credit scoring models using ensemble methods (XGBoost, LightGBM, Logistic Regression), improving model AUC by ~2–4%",
      "- Built income prediction models using transactional data, improving credit decision accuracy for ~124 million+ users",
      "- Deployed ML models using Google Vertex AI, enabling scalable pipelines",
      "- Analyzed credit bureau data to improve customer profiling and risk segmentation, increasing targeting effectiveness",
      "- Built real-time portfolio monitoring dashboards using Google Data Studio, improving decision visibility",
      "- Delivered insights for whitelist and dynamic loan limit strategies, contributing to ~30% improvement in approval efficiency",
    ],
  },
  {
    year: "Nov 2018 - Oct 2020",
    title: "Data Scientist",
    company: "Generali Indonesia",
    location: "Jakarta, Indonesia",
    description: [
      "- Enhanced dynamic pricing engine to support actuarial pricing, improving pricing accuracy",
      "- Built VBA-based dashboards for sales performance monitoring, reducing manual reporting workload by ~40%",
      "- Developed real-time data pipelines via API integration to improve data availability",
      "- Built agent compensation simulation models",
    ],
  },
  {
    year: "Sep 2017 - Sep 2018",
    title: "Decision Scientist",
    company: "PT. Bank Ganesha Tbk.",
    location: "Jakarta, Indonesia",
    description: [
      "- Developed credit scoring and segmentation models, improving cross-selling effectiveness by ~40%",
      "- Built automated reporting pipelines using Python and VBA, reducing manual workload by ~30%",
      "- Designed daily data mart pipelines for real-time business monitoring across 5+ stakeholders",
      "- Led data preparation and migration analysis for PSAK 71 compliance",
      "- Built credit scoring models using ensemble methods (XGBoost, LightGBM, Logistic Regression), AUC ~80%",
    ],
  },
];

function ExperienceRow({
  item,
  isLast,
}: {
  item: IExperience;
  isLast: boolean;
}) {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-[180px_40px_1fr]">
      {/* Year badge */}
      <div className="flex md:justify-end">
        <div className="h-fit">
          <span className="inline-flex items-center rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold text-white/90">
            {item.year}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="hidden md:flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]" />
        <div
          className={[
            "mt-2 w-[2px] bg-white/20",
            isLast ? "h-8 md:h-10" : "h-24 md:h-32",
          ].join(" ")}
        />
      </div>

      {/* Content card */}
      <div className="rounded-2xl bg-white/10 p-4 sm:p-5 text-white transition hover:bg-white/15">
        <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>

        <p className="mt-2 text-white/80 text-sm sm:text-base">
          <span className="font-semibold text-white">{item.company}</span>
          {item.location ? (
            <span className="text-white/60"> • {item.location}</span>
          ) : null}
        </p>
        {item.description.map((desc, idx) => (
          <p
            key={idx}
            className="mt-4 leading-relaxed text-white/70 text-sm sm:text-base"
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visibleExperience = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="bg-[#131414]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-josefin pb-8 text-center">
            Experience
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {visibleExperience.map((exp, idx) => (
              <ExperienceRow
                key={`${exp.year}-${exp.title}-${idx}`}
                item={exp}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </div>

          <div className="pt-10 flex justify-center text-white text-center text-[12px] font-bold tracking-wider font-open">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group relative w-full max-w-[180px] h-10 border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                {showAll ? "VIEW LESS" : "VIEW MORE"}
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <IoEyeOutline className="text-white text-xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
