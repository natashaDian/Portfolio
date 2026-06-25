import Image from "next/image";
import {
  Code2,
  Database,
  Layers3,
  Network,
  Bot,
} from "lucide-react";

const skills = [
  {
    title: "Database",
    icon: Database,
    items: ["Oracle EBS", "PL/SQL", "SAP", "PostgreSQL", "MySQL"],
  },
  {
    title: "Data Engineering",
    icon: Layers3,
    items: ["Kafka", "Spark", "Docker", "Airflow", "Grafana", "AWS", "GCP"],
  },
  {
    title: "Programming",
    icon: Bot,
    items: ["Java", "Python", "React"],
  },
  {
    title: "Others",
    icon: Network,
    items: ["Linux", "Excel", "Documentation"],
  },
];

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="bg-[#15111A] px-6 py-12 text-[#EDE6F0] sm:px-10 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl border border-[#1F1825] bg-[#1F1825] lg:grid-cols-2">
        <div className="border-b border-[#1F1825] p-8 lg:border-b-0 lg:border-r lg:p-12">
          <div className="mb-8 flex items-center gap-5">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#C97B84]">
              About Me
            </p>
            <span className="h-px w-16 bg-[#C97B84]" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-[#EDE6F0] sm:text-4xl">
            Hello!
            <br />
          </h2>
          <div className="allign-justify">
            <p className="mt-7 text-sm leading-8 text-[#8C8295]">
              Hi, I&apos;m Natasha Dian Mahardita, a 6th-semester Computer Science undergraduate student at BINUS University, currently pursuing an internship as an ERP Specialist.
              I have a strong interest and passion for the data field, which led me to specialize in database-focused Computer Science studies. 
            </p>
            <p className="mt-5 text-sm leading-8 text-[#8C8295]">
              Through this journey, I aim to build my career as a professional Data Engineer, ERP Specialist, and Backend Developer.
              Beyond data and backend development, I also enjoy building websites and understanding their workflows, from the technical structure to the overall user experience. 
              With the skills and knowledge I continue to develop, I aspire to become a professional IT developer who creates impactful and reliable solutions.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="relative h-64 w-56 overflow-hidden rounded-3xl border border-[#7C81A6]/20 bg-[#15111A] shadow-[0_0_24px_rgba(0,0,0,0.15)]">
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#7C81A6" strokeWidth="2" opacity="0.3" />
            </svg>
            <Image
              src="/images/dummy.svg"
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div
            id="skill"
            className="flex flex-col gap-6 border-t border-[#1F1825] md:flex-row md:items-center md:justify-between"
          >
            <div className="border-b border-[#1F1825] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="mb-2 flex items-center gap-5">
                <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#C97B84]">
                  skill
                </p>
              </div>
              <div className="flex gap-0">
              {skills.map(({ title, icon: Icon, items }) => (
              <div
                key={title}
                className="flex-1 border-r border-[#1F1825] p-6 last:border-r-0"
              >
                <div className="mb-2 flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-[#C97B84]"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-semibold text-[#EDE6F0]">{title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2 text-xs text-[#8C8295]">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-full bg-[#1F1825] px-3 py-1">
                      <span className="size-0.5 rounded-full bg-[#8C8295]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
