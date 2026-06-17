import {
  Code2,
  Database,
  Layers3,
  Network,
  Send,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Database",
    icon: Database,
    items: ["Oracle SQL", "PL/SQL", "Performance Tuning"],
  },
  {
    title: "Oracle EBS",
    icon: Layers3,
    items: ["Forms", "Reports", "Workflow", "Concurrent Program"],
  },
  {
    title: "Programming",
    icon: Code2,
    items: ["Java", "Python", "React"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["TOAD", "SQL Developer", "Git"],
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
      className="bg-[#050816] px-6 py-24 text-[#F8FAFC] sm:px-10 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl border border-[#1E293B] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border-b border-[#1E293B] p-8 lg:border-b-0 lg:border-r lg:p-12">
          <div className="mb-8 flex items-center gap-5">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#38BDF8]">
              About Me
            </p>
            <span className="h-px w-16 bg-[#38BDF8]" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-[#F8FAFC] sm:text-4xl">
            Problem solver.
            <br />
            Tech enthusiast.
          </h2>
          <p className="mt-7 text-sm leading-8 text-[#94A3B8]">
            Oracle EBS Developer with experience in PL/SQL development, Oracle
            Forms, Reports, Workflow customization, and enterprise application
            support.
          </p>
          <p className="mt-5 text-sm leading-8 text-[#94A3B8]">
            I enjoy turning complex business requirements into efficient,
            scalable, and maintainable solutions.
          </p>
          <p className="mt-10 text-3xl italic text-[#8B5CF6]">Natasha</p>
        </div>

        <div className="p-8 lg:p-12">
          <div className="mb-8 flex items-center gap-5">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#38BDF8]">
              Skills
            </p>
            <span className="h-px w-16 bg-[#38BDF8]" />
          </div>

          <div className="grid border-[#1E293B] md:grid-cols-2 xl:grid-cols-3">
            {skills.map(({ title, icon: Icon, items }) => (
              <div
                key={title}
                className="border-b border-[#1E293B] p-6 first:pt-0 md:border-r md:last:border-r-0 xl:[&:nth-child(3n)]:border-r-0"
              >
                <div className="mb-5 flex items-center gap-4">
                  <Icon
                    aria-hidden="true"
                    className="size-7 text-[#38BDF8]"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-semibold text-[#F8FAFC]">{title}</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#94A3B8]">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1 rounded-full bg-[#94A3B8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            id="contact"
            className="mt-10 flex flex-col gap-6 border-t border-[#1E293B] pt-10 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-5">
              <div className="flex size-16 items-center justify-center rounded-full border border-[#8B5CF6] bg-[#050816] text-[#8B5CF6]">
                <Send aria-hidden="true" className="size-7" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#38BDF8]">
                  Let&apos;s connect
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Let&apos;s build something great.
                </h3>
              </div>
            </div>
            <a
              href="mailto:natasha.mahardita@binus.ac.id"
              className="rounded-full border border-[#1E293B] bg-[#050816] px-5 py-3 text-sm text-[#94A3B8] transition duration-300 hover:border-[#38BDF8] hover:text-[#38BDF8]"
            >
              natasha.mahardita@binus.ac.id
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
