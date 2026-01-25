import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

type IProject = {
  title: string;
  brief: string; // purpose, audience, context
  technologies: string[];
  imageSrc?: string; // screenshot path e.g. "/projects/project-1.png"
  links?: {
    demo?: string;
    github?: string;
  };
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

const projects: IProject[] = [
  {
    title: "Data Analytics Dashboard (Full-Stack Project)",
    brief:
      "A web dashboard built to help stakeholders monitor key metrics and explore trends without manual spreadsheet reporting. Designed for non-technical users who need fast visibility into business performance.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "PostgreSQL",
    ],
    imageSrc: "tableau.jpg",
    links: {
      demo: "#contact",
      github: "https://github.com/husnirama",
    },
    star: {
      situation:
        "Reporting relied on manual exports and static charts, causing delays in decision-making and difficulty tracking KPI changes.",
      task: "Build an interactive dashboard that fetches data from an endpoint, supports filtering, and presents metrics clearly for quick analysis.",
      action:
        "Created reusable UI components in React, implemented data fetching with loading/error states, added filters, and structured the UI to be easy to scan. Used SQL/PostgreSQL to prepare clean datasets for the API and focused on maintainability and performance.",
      result:
        "Improved KPI visibility and reduced reporting friction. Stakeholders could explore metrics in real time and identify trends faster compared to manual reporting.",
    },
  },
  {
    title: "ETL to API Service (Data → Web Integration)",
    brief:
      "A lightweight service that transforms raw datasets into a clean, consistent format and exposes them through a REST API for web applications. Built for teams that need reliable, reusable data access.",
    technologies: ["Python", "SQL", "Node.js", "Express", "Docker"],
    imageSrc: "airflow-use-cases-image1.png",
    links: {
      demo: "#contact",
      github: "https://github.com/husnirama",
    },
    star: {
      situation:
        "Raw data sources were inconsistent and required repeated manual cleaning before being used in products or analysis.",
      task: "Automate the transformation process and provide a single API endpoint that applications can consume reliably.",
      action:
        "Built an ETL pipeline for validation and transformation, created REST endpoints to serve processed data, containerized the service with Docker, and documented the API for easy integration.",
      result:
        "Reduced repetitive manual cleaning and enabled downstream apps to consume standardized datasets more reliably, improving overall data consistency.",
    },
  },
  {
    title: "Model Monitoring Page (Prototype)",
    brief:
      "A prototype web interface to help review ML model performance indicators and monitoring logs. Intended for teams that need a quick way to detect performance drift and communicate model health.",
    technologies: ["React", "Node.js", "Python", "SQL", "Git"],
    imageSrc: "model-monitoring.png",
    links: {
      demo: "#contact",
      github: "https://github.com/husnirama",
    },
    star: {
      situation:
        "Model performance can degrade over time, but monitoring insights were scattered and hard to present to stakeholders.",
      task: "Create a simple web page that displays key metrics and monitoring logs in a structured, readable format.",
      action:
        "Designed a clean UI, exposed metrics via an API endpoint, implemented list/table rendering for logs, and ensured the page remained understandable for non-technical viewers.",
      result:
        "Improved the ability to communicate model health clearly and provided a foundation for expanding monitoring into an end-to-end internal tool.",
    },
  },
];

function StarBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-3">
      <p className="text-sm font-semibold tracking-widest text-white/90">
        {title.toUpperCase()}
      </p>
      <p className="text-sm leading-relaxed text-white/75">{text}</p>
    </div>
  );
}

function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 1);

  return (
    <section id="portfolio" className="scroll-mt-20">
      <div className="bg-[#131414] min-h-[calc(100vh-80px)]">
        <div className="h-full mx-[285px] px-7.5 pb-25 pt-10">
          <h4 className="text-center font-josefin font-bold text-[36px] text-white">
            My Portfolio
          </h4>
          <div className="grid gap-10 mx-auto pt-4">
            {visibleProjects.map((p) => (
              <article key={p.title} className="rounded-2xl bg-white/10 p-4">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Visual */}
                  <div className="overflow-hidden rounded-xl bg-black/20">
                    {p.imageSrc ? (
                      <img
                        src={p.imageSrc}
                        alt={`${p.title} screenshot`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center justify-center text-white/40">
                        Add a screenshot (optional)
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-white">{p.title}</h3>

                    {/* Brief description (purpose, audience, context) */}
                    <p className="mt-3 leading-relaxed text-white/80">
                      {p.brief}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-white/90">
                        Technologies
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-black/20 px-3 py-1 text-xs text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="mt-3 flex flex-wrap gap-3">
                      {p.links?.demo && (
                        <a
                          href={p.links.demo}
                          className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
                        >
                          Live Demo
                        </a>
                      )}
                      {p.links?.github && (
                        <a
                          href={p.links.github}
                          target="_blank"
                          className="rounded-full border-2 border-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500/10"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* STAR Method */}
                <div className="pt-4 grid gap-4 md:grid-cols-2">
                  <StarBlock title="Situation" text={p.star.situation} />
                  <StarBlock title="Task" text={p.star.task} />
                  <StarBlock title="Action" text={p.star.action} />
                  <StarBlock title="Result" text={p.star.result} />
                </div>
              </article>
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

export default Portfolio;
