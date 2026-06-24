"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectType = "Data" | "Software";

type Project = {
  name: string;
  tag: string;
  description: string;
  type: ProjectType;
  status: string;
  link: string;
  startingAt: string;
  photo: string;
};

const projects: Project[] = [
  {
    name: "Automated Email Retur Notification",
    tag : "Perusahaan",
    description:
      "Automated scheduled supplier invoice processing with PL/SQL procedures, form, validation logic, and workflow routing.",
    type: "Data",
    status: "Complete",
    link: "confidential",
    startingAt: "2026-04-01",
    photo: "/images/NotifikasiEnseval.png",
  },
  {
    name: "AirBnB Profit at a Glance",
    tag : "Individu",
    description:
      "A Tableau overview for U.S. hosts, explaining price distribution and property type performance across bookings.",
    type: "Data",
    status: "Complete",
    link: "https://public.tableau.com/views/AirBnBMarketTrend/Dashboard2?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    startingAt: "2025-09-04",
    photo: "/images/AirBnb.png",
  },
  {
    name: "ITFest IPB: Plant Detection",
    tag : "Lomba",
    description:
      "A machine learning web app for plant disease detection, built with Python and deployed for a national AI competition.",
    type: "Software",
    status: "Complete",
    link: "https://plant-disease2.vercel.app",
    startingAt: "2025-07-05",
    photo: "/images/ITFest.png",
  },
  {
    name: "PupukinAI",
    tag : "Individu",
    description:
      "A data analysis project exploring fertilizer pricing and distribution models for local agricultural production.",
    type: "Data",
    status: "Complete",
    link: "https://colab.research.google.com/drive/14ARYQsqzdHQ9pb4-PSuDY8n5iJN53g1i?usp=sharing",
    startingAt: "2025-01-02",
    photo: "/images/PupukinAI.png",
  },
  {
    name: "BuyBuddy",
    tag : "Individu",
    description:
      "A UI/UX grocery comparison app concept designed to help students compare prices across stores efficiently.",
    type: "Software",
    status: "Complete",
    link: "",
    startingAt: "2024-10-27",
    photo: "/images/buybuddy.png",
  },
  {
    name: "Satria Data: Deforestasi Indonesia",
    tag : "Lomba",
    description:
      "An infographic poster analyzing forest problems in Indonesia through a climate action and data analytics lens.",
    type: "Data",
    status: "Complete",
    link: "https://www.canva.com/design/DAGHcEvnD5c/VaGzB1aBYvQ4Brc0UhVKqw/edit?utm_content=DAGHcEvnD5c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    startingAt: "2024-06-20",
    photo: "/images/SatriaData.png",
  },
  {
    name: "ASEAN DSE: Overcoming Malnutrition",
    tag : "Lomba",
    description:
      "An international data analytics project discussing malnutrition in Indonesia and food distribution challenges.",
    type: "Data",
    status: "Complete",
    link: "https://drive.google.com/file/d/1S0CjOChLQVjFwaxdEPYr8KhkMvElJq1y/view?usp=sharing",
    startingAt: "2024-06-14",
    photo: "/images/ASEANDSE.png",
  },
];

const tabs: ProjectType[] = ["Data", "Software"];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function getTagClasses(tag: string) {
  switch (tag) {
    case "Perusahaan":
      return "border-[#C97B84]/35 bg-[#C97B84]/12 text-[#C97B84]";
    case "Individu":
      return "border-[#7C81A6]/35 bg-[#7C81A6]/12 text-[#7C81A6]";
    case "Lomba":
      return "border-[#7FAE84]/35 bg-[#7FAE84]/12 text-[#7FAE84]";
    default:
      return "border-[#1F1825] bg-[#15111A]/90 text-[#EDE6F0]";
  }
}

export default function ProjectsSection() {
  const [selectedType, setSelectedType] = useState<ProjectType>("Data");
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  const filteredProjects = projects
    .filter((project) => project.type === selectedType)
    .sort(
      (a, b) =>
        new Date(b.startingAt).getTime() - new Date(a.startingAt).getTime(),
    );

  useEffect(() => {
    setActiveIndex(0);
    setSlideDirection(1);
  }, [selectedType]);

  useEffect(() => {
    if (filteredProjects.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setSlideDirection(1);
      setActiveIndex((currentIndex) => (currentIndex + 1) % filteredProjects.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [filteredProjects.length]);

  const activeProject = filteredProjects[activeIndex] ?? filteredProjects[0];
  const isAutomatedEmailProject =
    activeProject?.name === "Automated Email Retur Notification";

  const goToPrevious = () => {
    setSlideDirection(-1);
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + filteredProjects.length) % filteredProjects.length,
    );
  };

  const goToNext = () => {
    setSlideDirection(1);
    setActiveIndex((currentIndex) => (currentIndex + 1) % filteredProjects.length);
  };

  return (
    <section
      id="projects"
      className="border-b border-[#1F1825] bg-[#15111A] px-6 py-24 text-[#EDE6F0] sm:px-10 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#C97B84]">
              Projects
            </p>
            <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-[#EDE6F0] sm:text-5xl">
              Where business logic meets data-driven engineering
              <span className="sr-only">...</span>
              <span aria-hidden="true" className="inline-flex w-10 text-[#EDE6F0]">
                <span className="animate-project-dot">.</span>
                <span className="animate-project-dot">.</span>
                <span className="animate-project-dot">.</span>
              </span>
            </h2>
          </div>

          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedType(tab)}
                className={`h-11 rounded-full border px-5 text-xs font-medium uppercase tracking-[0.18em] transition duration-300 ${
                  selectedType === tab
                    ? "border-[#C97B84] bg-[#1F1825] text-[#C97B84]"
                    : "border-[#1F1825] bg-[#1F1825] text-[#8C8295] hover:border-[#7C81A6] hover:text-[#EDE6F0]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={goToPrevious}
            className="flex size-11 items-center justify-center rounded-full border border-[#1F1825] bg-[#1F1825] text-[#8C8295] transition duration-300 hover:border-[#C97B84] hover:text-[#C97B84]"
            aria-label="Previous project"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="flex size-11 items-center justify-center rounded-full border border-[#1F1825] bg-[#1F1825] text-[#8C8295] transition duration-300 hover:border-[#C97B84] hover:text-[#C97B84]"
            aria-label="Next project"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>

        <div className="mt-8 overflow-hidden border border-[#1F1825] bg-[#1F1825]">
          {activeProject && (
            <article
              key={activeProject.name}
              className={`grid gap-0 lg:grid-cols-[1.08fr_0.92fr] ${
                slideDirection === 1
                  ? "animate-project-slide-next"
                  : "animate-project-slide-prev"
              }`}
            >
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] backdrop-blur-sm ${getTagClasses(activeProject.tag)}`}
                  >
                    {activeProject.tag}
                  </span>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-xs text-[#8C8295]">
                      {formatDate(activeProject.startingAt)}
                    </span>
                    <span className="rounded-full bg-[#C97B84]/10 px-3 py-1 text-xs text-[#C97B84]">
                      {activeProject.status}
                    </span>
                  </div>
                  <h3 className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-[#EDE6F0] sm:text-4xl">
                    {activeProject.name}
                  </h3>
                  <p className="mt-6 max-w-xl text-sm leading-8 text-[#8C8295] sm:text-base">
                    {activeProject.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {activeProject.link === "confidential" ? (
                    <span className="inline-flex h-11 items-center rounded-full border border-[#1F1825] bg-[#15111A] px-5 text-xs font-medium uppercase tracking-[0.18em] text-[#C97B84]">
                      Confidential
                    </span>
                  ) : (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-[#1F1825] bg-[#15111A] px-5 text-xs font-medium uppercase tracking-[0.18em] text-[#C97B84] transition duration-300 hover:border-[#C97B84]"
                    >
                      Open project
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <div
                className={`relative min-h-[320px] overflow-hidden lg:min-h-[460px] ${
                  isAutomatedEmailProject ? "bg-[#FAFAFA]" : "bg-[#15111A]"
                }`}
              >
                <Image
                  src={activeProject.photo}
                  alt={activeProject.name}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className={
                    isAutomatedEmailProject
                      ? "object-contain object-center p-5 sm:p-8 lg:p-10"
                      : "object-cover"
                  }
                />
                {isAutomatedEmailProject ? (
                  <div className="absolute inset-x-[8%] bottom-7 h-14 rounded-full bg-black/10 blur-2xl" />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,17,26,0.08),rgba(21,17,26,0.34))]" />
                )}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
