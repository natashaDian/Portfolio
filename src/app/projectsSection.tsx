"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type ProjectType = "Data" | "Software";

type Project = {
  name: string;
  description: string;
  type: ProjectType;
  status: string;
  link: string;
  startingAt: string;
  photo: string;
};

const projects: Project[] = [
  {
    name: "AirBnB Profit at a Glance",
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
    description:
      "A UI/UX grocery comparison app concept designed to help students compare prices across stores efficiently.",
    type: "Software",
    status: "Complete",
    link: "https://www.figma.com/proto/kQISciy9d6JXM0R3ERYtSP/Tahu-Bulats?page-id=0%3A1&node-id=57-2&starting-point-node-id=94%3A80&t=vYzY9zKTjsChgsIZ-1",
    startingAt: "2024-10-27",
    photo: "/images/buybuddy.png",
  },
  {
    name: "Satria Data: Deforestasi Indonesia",
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

export default function ProjectsSection() {
  const [selectedType, setSelectedType] = useState<ProjectType>("Data");

  const filteredProjects = projects
    .filter((project) => project.type === selectedType)
    .sort(
      (a, b) =>
        new Date(b.startingAt).getTime() - new Date(a.startingAt).getTime(),
    );

  return (
    <section
      id="projects"
      className="border-b border-[#1E293B] bg-[#050816] px-6 py-24 text-[#F8FAFC] sm:px-10 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#38BDF8]">
              Projects
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-[#F8FAFC] sm:text-5xl">
              Enterprise thinking, data clarity, and practical software.
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
                    ? "border-[#38BDF8] bg-[#050816] text-[#38BDF8]"
                    : "border-[#1E293B] bg-[#050816] text-[#94A3B8] hover:border-[#8B5CF6] hover:text-[#F8FAFC]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden border border-[#1E293B] bg-[#050816] transition duration-300 hover:border-[#38BDF8]"
            >
              <div className="relative aspect-[16/10] border-b border-[#1E293B]">
                <Image
                  src={project.photo}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#94A3B8]">
                    {formatDate(project.startingAt)}
                  </span>
                  <span className="rounded-full bg-[#38BDF8]/10 px-3 py-1 text-xs text-[#38BDF8]">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-[#F8FAFC]">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#38BDF8]">
                  Open project
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
