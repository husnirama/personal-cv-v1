import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

type IProject = {
  title: string;
  brief: string;
  technologies: string[];
  imageSrc?: string;
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
    title: "EventHub - Event Management Platform",
    brief:
      "A full-stack event management system with structured backend architecture, enabling scalable event discovery, organizer workflows, and optimized data access using caching and API-driven design.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "PostgreSQL (Supabase)",
      "Prisma ORM",
      "Redis (Upstash)",
      "JWT Authentication",
      "Cloudinary",
    ],
    imageSrc: "/eventHub.jpg",
    links: {
      demo: "https://app.husniramandalubis.com/",
      github: "https://github.com/husnirama/99-mini-project.git",
    },
    star: {
      situation:
        "Event platforms require efficient data retrieval, secure user authentication, and scalable backend systems to support both high-frequency event browsing and organizer operations.",
      task: "Design and build a full-stack system that supports event discovery, filtering, and organizer workflows while ensuring performance optimization, secure authentication, and scalable data handling.",
      action:
        "Developed a responsive frontend with React and TypeScript featuring search, filtering, and categorized event listings. Built RESTful APIs using PostgreSQL (Supabase) with Prisma ORM for structured data management. Implemented Redis caching (Upstash) to optimize GET request performance and reduce database load. Integrated JWT-based authentication for session handling and secure access control. Used Cloudinary for image storage and delivery. Structured the system to support both attendee-facing discovery and organizer-side event management workflows.",
      result:
        "Delivered a scalable full-stack system with improved data retrieval performance, secure authentication, and efficient event management workflows, enabling smoother user experience and reduced backend load.",
    },
  },
  {
    title: "Spoken Language Identification using CNN",
    brief:
      "An end-to-end deep learning pipeline for classifying spoken language from raw audio signals using feature extraction and convolutional neural networks.",
    technologies: [
      "Python",
      "Librosa",
      "NumPy",
      "SciPy",
      "TensorFlow / Keras",
      "CNN",
      "Signal Processing",
    ],
    imageSrc: "/spoken_languange_detection.png",
    links: {
      demo: "#contact",
      github: "https://github.com/husnirama/SpokenLanguangeDetection.git",
    },
    star: {
      situation:
        "Audio data is unstructured and requires transformation into meaningful representations before it can be used for machine learning tasks such as classification.",
      task: "Build an end-to-end machine learning pipeline that can process raw audio signals and classify spoken language using extracted audio features.",
      action:
        "Processed raw audio files (.flac) and performed feature extraction using MFCC, chroma, and Mel spectrogram representations. Applied signal processing techniques such as FFT and spectrogram transformation to convert audio into model-ready inputs. Designed and trained a Convolutional Neural Network (CNN) to learn patterns from audio features for language classification. Structured the pipeline from data loading, preprocessing, feature engineering, to model training and evaluation.",
      result:
        "Successfully built an audio classification pipeline capable of learning language-specific patterns from speech data, demonstrating the application of deep learning on unstructured audio signals.",
    },
  },
  {
    title: "AI Content Creator Platform (In Progress)",
    brief:
      "An AI-driven content research and generation platform designed to automate topic discovery, hook creation, and structured content insights for social media and video platforms.",
    technologies: [
      "Python",
      "FastAPI",
      "REST API",
      "LLM Integration",
      "YouTube Data Processing",
      "Data Pipeline",
    ],
    imageSrc: "/ai-content.jpg",
    links: {
      demo: "#contact",
      github: "https://github.com/husnirama/ContentCreator.git",
    },
    star: {
      situation:
        "Content creators spend significant time researching trends, validating topics, and crafting engaging hooks, often relying on manual exploration across platforms.",
      task: "Build a system that automates content research and structures outputs into actionable insights such as topics, hooks, problems, and narratives for creators.",
      action:
        "Developing a backend system that collects and processes content data (e.g., YouTube trends), structures insights into topic clusters, and generates hooks and narratives using LLM-based pipelines. Designing modular components for topic extraction, insight generation, and content structuring to support scalable automation.",
      result:
        "Currently building an end-to-end AI-assisted content pipeline aimed at reducing manual research effort and improving the consistency and quality of content ideation. Will aim to generate the full compact video ready to publish based on structured insights and hooks.",
    },
  },
];

function StarBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-3 sm:p-4">
      <p className="text-xs sm:text-sm font-semibold tracking-widest text-white/90">
        {title.toUpperCase()}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-white/75">{text}</p>
    </div>
  );
}

function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 1);

  return (
    <section id="portfolio" className="scroll-mt-24">
      <div className="bg-[#131414]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <h4 className="text-center font-josefin font-bold text-3xl sm:text-[36px] text-white">
            My Portfolio
          </h4>

          <div className="grid gap-10 mx-auto pt-6">
            {visibleProjects.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl bg-white/10 p-4 sm:p-6"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Visual */}
                  <div className="overflow-hidden rounded-xl bg-black/20">
                    {p.imageSrc ? (
                      <img
                        src={p.imageSrc}
                        alt={`${p.title} screenshot`}
                        className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center justify-center text-white/40 min-h-[220px]">
                        Add a screenshot (optional)
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {p.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-white/80 text-sm sm:text-base">
                      {p.brief}
                    </p>

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

                    <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3">
                      {p.links?.demo && (
                        <a
                          href={p.links.demo}
                          className="text-center rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
                        >
                          Live Demo
                        </a>
                      )}
                      {p.links?.github && (
                        <a
                          href={p.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-center rounded-full border-2 border-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500/10"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 grid gap-4 md:grid-cols-2">
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

export default Portfolio;
