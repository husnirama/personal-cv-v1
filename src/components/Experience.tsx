import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

type IExperience = {
  year: string;
  title: string;
  company: string;
  location?: string;
  description: string;
};

const experiences: IExperience[] = [
  {
    year: "2024",
    title: "Data Scientist (Transitioning to Full-Stack)",
    company: "Self / Independent Projects",
    location: "Jakarta, Indonesia",
    description:
      "Built data-driven prototypes and dashboards to turn analysis into usable products. Focused on creating clean UIs, integrating APIs, and structuring backend logic for reliable delivery. Currently strengthening full-stack fundamentals through real projects and consistent practice.",
  },
  {
    year: "2023",
    title: "Data Scientist / Analytics",
    company: "Company Name",
    location: "Indonesia",
    description:
      "Delivered insights through SQL and Python analysis, built reporting pipelines, and collaborated with stakeholders to define measurable metrics. Improved decision-making by translating complex data findings into clear recommendations and repeatable processes.",
  },
  {
    year: "2022",
    title: "Data Analyst / BI",
    company: "Company Name",
    location: "Indonesia",
    description:
      "Supported business teams with dashboards and ad-hoc analysis. Standardized core metrics, improved reporting consistency, and reduced manual work by introducing structured queries and reusable reporting patterns.",
  },
  {
    year: "2022",
    title: "Data Analyst / BI",
    company: "Company Name",
    location: "Indonesia",
    description:
      "Supported business teams with dashboards and ad-hoc analysis. Standardized core metrics, improved reporting consistency, and reduced manual work by introducing structured queries and reusable reporting patterns.",
  },
  {
    year: "2022",
    title: "Data Analyst / BI",
    company: "Company Name",
    location: "Indonesia",
    description:
      "Supported business teams with dashboards and ad-hoc analysis. Standardized core metrics, improved reporting consistency, and reduced manual work by introducing structured queries and reusable reporting patterns.",
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
    <div className="grid gap-6 md:grid-cols-[180px_40px_1fr]">
      {/* Year badge */}
      <div className="flex md:justify-end">
        <div className="h-fit">
          <span className="inline-flex items-center rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold text-white/90">
            {item.year}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Glowing dot */}
        <div className="h-4 w-4 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]" />

        {/* Line */}
        <div
          className={[
            "mt-2 w-[2px] bg-white/20",
            isLast ? "h-8 md:h-10" : "h-24 md:h-32",
          ].join(" ")}
        />
      </div>

      {/* Content card */}
      <div className="rounded-2xl bg-white/10 p-2 text-white transition hover:bg-white/15">
        <h3 className="text-2xl font-bold">{item.title}</h3>

        <p className="mt-2 text-white/80">
          <span className="font-semibold text-white">{item.company}</span>
          {item.location ? (
            <span className="text-white/60"> • {item.location}</span>
          ) : null}
        </p>

        <p className="mt-4 leading-relaxed text-white/70">{item.description}</p>
      </div>
    </div>
  );
}

function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visibleExperience = showAll ? experiences : experiences.slice(0, 3);
  return (
    <section id="experience">
      <div className="bg-[#131414] min-h-[calc(100vh-80px)]">
        <div className="h-full mx-[285px] px-7.5 pb-25 pt-10">
          <h2 className="text-4xl font-bold text-white font-josefin pb-8 text-center">
            Experience
          </h2>

          <div className="space-y-10">
            {visibleExperience.map((exp, idx) => (
              <ExperienceRow
                key={`${exp.year}-${exp.title}`}
                item={exp}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </div>
          <div className="pt-10 flex justify-center text-white text-center text-[12px] font-bold tracking-wider font-open">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group relative w-[130px] h-10 border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent"
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

{
  /* <button className="group relative w-[130px] h-10 border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent">
  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
    HIRE ME
  </span>
  <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
    <RiTelegram2Line className="text-white text-xl" />
  </span>
</button>; */
}
