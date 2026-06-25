"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Users, Database, Sparkles, BriefcaseBusiness, ArrowRight } from "lucide-react";

const experiences = [
  {
    period: "2026 — Present",
    title: "ERP Specialist (Oracle)",
    tag: "Internship",
    description:
      "Internship role focused on Oracle EBS, PL/SQL, and workflow customization to enhance business processses and deliver reliable value.",
    icon: BriefcaseBusiness,
    photo: "/images/dummy.svg",
    link: ""
  },
  {
    period: "2025 — 2026",
    title: "Data Engineering by Dibimbing",
    tag: "Bootcamp",
    description:
      "Developed data engineering skills within 6 months to graduate, worked on case studies from several companies.",
    icon: Database,
    photo: "/images/dummy.svg",
    link: ""
  },
  {
    period: "2024 — 2025",
    title: "Marketing Team",
    tag: "Part Time Job",
    description:
      "Assisted in promoting Binus University through various high school events, performed data entry, telemarketing as customer service at admission, served as MC as multiple official events.",
    icon: Sparkles,
    photo: "/images/dummy.svg",
    link: ""
  },
  {
    period: "2024 — 2025",
    title: "Freshman Partner",
    tag: "Student Organization",
    description:
      "Led a team of freshmen within one year to help them transition into university life, including assisting their academic and social integration.",
    icon: Users,
    photo: "/images/dummy.svg",
    link: ""
  },
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) % 11000;
      if (elapsed < 5500) {
        const stage = Math.min(3, Math.floor((elapsed / 5500) * 4));
        setActiveIndex(3 - stage);
      } else {
        const stage = Math.min(3, Math.floor(((elapsed - 5500) / 5500) * 4));
        setActiveIndex(stage);
      }
    }, 100);

    return () => window.clearInterval(interval);
  }, []);

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
            {experiences.map(({ period, title, tag, description, icon: Icon, photo, link }, index) => {
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
                    <div
                      data-active={activeIndex === index ? "true" : undefined}
                      className="group rounded-lg border border-[#1F1825] bg-[#1F1825]/80 p-6 transition duration-300 hover:border-[#C97B84]/70 hover:bg-[#EDE6F0]"
                    >
                      <p className="text-sm font-semibold tracking-[0.16em] text-[#EDE6F0] group-hover:text-[#15111A]">
                        {period}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#EDE6F0] group-hover:text-[#15111A] sm:text-3xl">
                        {title}
                      </h2>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#C97B84]/10 px-3 py-1 text-xs text-[#C97B84] group-hover:text-[#15111A] group-hover:bg-[#C97B84]/20">
                        <Icon aria-hidden="true" className="size-3" strokeWidth={1.5} />
                        {tag}
                      </span>
                      <p className="mt-5 max-w-xl text-sm leading-8 text-[#8C8295] group-hover:text-[#15111A] lg:ml-auto">
                        {description}
                      </p>
                      <div className="mt-10 flex flex-wrap items-center gap-4 justify-end">
                        <a href={link}
                          className="group inline-flex items-center gap-3 border-b border-[#C97B84] pb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#C97B84] transition-colors duration-300 group-hover:text-[#15111A]">
                          Learn More
                          <ArrowRight className="text-[#C97B84] group-hover:text-[#15111A] size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`hidden lg:flex lg:items-center lg:justify-center lg:rounded-3xl lg:border lg:border-[#1F1825] lg:bg-[#15111A] lg:p-4 lg:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] ${
                      isLeft ? "lg:col-start-3" : "lg:col-start-1"
                    }`}
                  >
                    <div className="relative h-56 w-full max-w-[260px] overflow-hidden rounded-3xl border border-[#7C81A6]/20 bg-[#15111A] shadow-[0_0_24px_rgba(0,0,0,0.15)]">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={title}
                          fill
                          className="object-cover animate-photo-float"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.18em] text-[#8C8295]">
                          No image
                        </div>
                      )}
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
