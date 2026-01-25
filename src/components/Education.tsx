import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCogs,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiTailwindcss,
  SiExpress,
  SiTableau,
  SiGoogledatastudio,
  SiPlotly,
} from "react-icons/si";
import { MdApi, MdIntegrationInstructions } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { DiGoogleCloudPlatform } from "react-icons/di";

function SkillCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 transition hover:bg-white/15 text-center h-full">
      <h3 className="text-xl font-semibold text-white pb-2">{title}</h3>
      <ul className="space-y-4 items-center">{children}</ul>
    </div>
  );
}

function Skill({
  icon,
  iconSrc,
  label,
}: {
  icon?: React.ReactNode;
  iconSrc?: string;
  label: string;
}) {
  return (
    <li className="flex items-center justify-center gap-3 text-white/80">
      {icon ? (
        <span className="text-xl text-red-400">{icon}</span>
      ) : (
        <img src={iconSrc} alt={label} className="h-8 w-8" />
      )}
      <span>{label}</span>
    </li>
  );
}

function Education() {
  return (
    <section id="hero">
      {/* h-[calc(100vh-80px)] */}
      <div className="bg-[url(chat-gpt.png)] bg-cover h-[calc(100vh-80px)]">
        <div className="h-full mx-[285px] px-7.5 pb-25 pt-10">
          <h2 className="text-4xl font-bold text-white font-josefin pb-8 text-center">
            My Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-7xl items-center">
            {/* Front-End Card */}
            <SkillCard title="Front-End">
              <Skill icon={<FaHtml5 />} label="HTML5" />
              <Skill icon={<FaCss3Alt />} label="CSS3" />
              <Skill icon={<FaJs />} label="JavaScript (ES6+)" />
              <Skill icon={<FaReact />} label="React" />
              <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
            </SkillCard>

            {/* Back-End Card */}
            <SkillCard title="Back-End">
              <Skill icon={<FaNodeJs />} label="Node.js" />
              <Skill icon={<MdApi />} label="RESTful APIs" />
              <Skill icon={<FaPython />} label="Python (Data & Backend)" />
              <Skill icon={<FaDatabase />} label="SQL (PostgreSQL / MySQL)" />
              <Skill icon={<SiExpress />} label="Express.js" />
            </SkillCard>

            {/* DevOps & Tools Card */}
            <SkillCard title="DevOps">
              <Skill icon={<FaGitAlt />} label="Git & GitHub" />
              <Skill icon={<FaDocker />} label="Docker" />
              <Skill icon={<FaCogs />} label="CI/CD Fundamentals" />
              <Skill
                icon={<DiGoogleCloudPlatform />}
                label="GCP (Foundational)"
              />
              <Skill
                icon={<MdIntegrationInstructions />}
                label="API Integration"
              />
            </SkillCard>
          </div>
          <div className="grid gap-8 md:grid-cols-2 mx-auto pt-15 pb-8 max-w-7xl items-center">
            <SkillCard title="Machine Learning Algorithm">
              <Skill icon={<SiTensorflow />} label="Neural Network" />
              <Skill icon={<SiTensorflow />} label="Logistic Regression" />
              <Skill icon={<SiTensorflow />} label="XGBoost" />
              <Skill icon={<SiTensorflow />} label="Decision Tree" />
              <Skill icon={<SiTensorflow />} label="K-NN" />
            </SkillCard>
            <SkillCard title="Data Visualization">
              <Skill icon={<SiTableau />} label="Tableau" />
              <Skill icon={<FaCss3Alt />} label="Power BI" />
              <Skill icon={<SiGoogledatastudio />} label="Google Data Studio" />
              <Skill icon={<SiPlotly />} label="Plotly" />
              <Skill
                icon={<PiMicrosoftExcelLogoFill />}
                label="Microsoft Excel"
              />
            </SkillCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
