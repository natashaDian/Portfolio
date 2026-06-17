import { ArrowUpRight, BarChart3, FileCode2, MailCheck } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "AP Invoice Automation",
    tag: "Oracle EBS Customization",
    description:
      "Automated supplier invoice processing with PL/SQL procedures, validation logic, and workflow routing.",
    icon: FileCode2,
  },
  {
    number: "02",
    title: "Vendor Email Notification",
    tag: "Oracle EBS Integration",
    description:
      "Developed SMTP integration for automatic vendor notifications and operational follow-up.",
    icon: MailCheck,
  },
  {
    number: "03",
    title: "Branch Financial Report",
    tag: "Reporting & Analysis",
    description:
      "Created Oracle Reports and BI Publisher outputs for multi-branch financial visibility.",
    icon: BarChart3,
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-[#1E293B] bg-[#050816] px-6 py-24 text-[#F8FAFC] sm:px-10 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-center gap-5">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#38BDF8]">
            Selected Work
          </p>
          <span className="h-px flex-1 bg-[#1E293B]" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map(({ number, title, tag, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative min-h-72 border border-[#1E293B] bg-[#050816]/80 p-7 transition duration-300 hover:border-[#38BDF8]"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="text-sm font-medium text-[#38BDF8]">
                  {number}
                </span>
                <div className="flex size-16 items-center justify-center rounded-lg border border-[#1E293B] bg-[#050816] text-[#38BDF8] transition duration-300 group-hover:border-[#8B5CF6] group-hover:text-[#8B5CF6]">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={1.5} />
                </div>
              </div>

              <h2 className="max-w-xs text-xl font-semibold leading-8 text-[#F8FAFC]">
                {title}
              </h2>
              <span className="mt-4 inline-flex rounded-full bg-[#38BDF8]/10 px-3 py-1 text-xs text-[#38BDF8]">
                {tag}
              </span>
              <p className="mt-6 text-sm leading-7 text-[#94A3B8]">
                {description}
              </p>

              <ArrowUpRight
                aria-hidden="true"
                className="absolute bottom-7 right-7 size-5 text-[#38BDF8] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
