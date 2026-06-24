import { BarChart3, Database, FileCode2, MailCheck } from "lucide-react";

const experiences = [
  {
    period: "2026 — Now",
    title: "Automated Email Retur Notification",
    tag: "Oracle EBS Programming",
    description:
      "Automated supplier  invoice processing with PL/SQL procedures, form, validation logic, and workflow routing.",
    icon: FileCode2,
  },
  {
    period: "2025 — 2026",
    title: "Vendor Email Notification",
    tag: "Oracle EBS Integration",
    description:
      "Developed SMTP integration for automatic vendor notifications and operational follow-up.",
    icon: MailCheck,
  },
  {
    period: "2024 — 2025",
    title: "Branch Financial Report",
    tag: "Reporting & Analysis",
    description:
      "Created Oracle Reports and BI Publisher outputs for multi-branch financial visibility.",
    icon: BarChart3,
  },
  {
    period: "2023 — 2024",
    title: "Database Development Foundation",
    tag: "SQL & Documentation",
    description:
      "Built a strong base in SQL logic, data modeling, technical documentation, and structured problem solving.",
    icon: Database,
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-[#1F1825] bg-[#15111A] px-6 py-24 text-[#EDE6F0] sm:px-10 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#C97B84]">
            Experiences
          </p>
          <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-[#EDE6F0] sm:text-5xl">
              Hello World started with
              <span className="sr-only">...</span>
              <span aria-hidden="true" className="inline-flex w-10 text-[#EDE6F0]">
                <span className="animate-project-dot">.</span>
                <span className="animate-project-dot">.</span>
                <span className="animate-project-dot">.</span>
              </span>
            </h2>
          <span className="h-px flex-1 bg-[#1F1825]" />
        </div>

        <div className="relative mt-16">
          <div className="absolute left-5 top-3 h-[calc(100%-24px)] w-px bg-[#7C81A6]/55 lg:left-1/2 lg:-translate-x-px" />
          <span
            aria-hidden="true"
            className="animate-timeline-dot absolute left-5 z-20 size-4 -translate-x-1/2 rounded-full border-2 border-[#15111A] bg-[#C97B84] shadow-[0_0_24px_rgba(201,123,132,0.7)] lg:left-1/2"
          />

          <div className="space-y-14 lg:space-y-16">
            {experiences.map(({ period, title, tag, description, icon: Icon }, index) => {
              const isLeft = index % 2 === 1;

              return (
                <article
                  key={title}
                  className={`relative grid items-center gap-6 lg:grid-cols-[1fr_88px_1fr] ${
                    isLeft ? "lg:[&>.timeline-copy]:lg:col-start-1" : ""
                  }`}
                >
                  <div
                    className={`timeline-copy pl-14 lg:pl-0 ${
                      isLeft
                        ? "lg:col-start-1 lg:row-start-1 lg:pr-12 lg:text-right"
                        : "lg:col-start-3 lg:row-start-1 lg:pl-12"
                    }`}
                  >
                    <div className="rounded-lg border border-[#1F1825] bg-[#1F1825]/80 p-6 transition duration-300 hover:border-[#C97B84]/70">
                      <p className="text-sm font-semibold tracking-[0.16em] text-[#EDE6F0]">
                        {period}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#EDE6F0] sm:text-3xl">
                        {title}
                      </h2>
                      <span className="mt-4 inline-flex rounded-full bg-[#C97B84]/10 px-3 py-1 text-xs text-[#C97B84]">
                        {tag}
                      </span>
                      <p className="mt-5 max-w-xl text-sm leading-8 text-[#8C8295] lg:ml-auto">
                        {description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center lg:static lg:mx-auto lg:h-[88px] lg:w-[88px]">
                    <span className="absolute h-4 w-4 rounded-full border-2 border-[#7C81A6] bg-[#15111A]" />
                    <span className="absolute h-10 w-10 rounded-full border border-[#7C81A6]/35" />
                    <span
                      className={`absolute top-1/2 hidden h-px w-14 bg-[#7C81A6]/55 lg:block ${
                        isLeft ? "left-1/2" : "right-1/2"
                      }`}
                    />
                    <div className="hidden size-14 items-center justify-center rounded-full border border-[#1F1825] bg-[#1F1825] text-[#C97B84] lg:flex">
                      <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
