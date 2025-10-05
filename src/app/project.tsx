"use client";
import { useState } from "react";
import "animate.css";

type ProjectsProps = {
  type: "Data" | "Software";
};

type Project = {
  namaprojek: string;
  deskripsi: string;
  type: "Data" | "Software";
  status: string;
  link: string;
  startingAt: Date;
  photo: string;
};

const allProjects: Project[] = [
  {
    namaprojek: "AirBnB Profit at a Glance",
    deskripsi:
      "A Tableau Overview for U.S. Hosts. Explain price distribution for a year, or even which type of house that get booked the most.",
    type: "Data",
    status: "Complete",
    link: "https://public.tableau.com/views/AirBnBMarketTrend/Dashboard2?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    startingAt: new Date("2025-09-04"),
    photo: "images/AirBnb.png",
  },
  {
    namaprojek: "ITFest IPB : Plant Detection",
    deskripsi:
      "A national AI competition for making a website or application with AI orientation. Engineered a machine learning model utilizing Python and Google Colab to detect plant diseases from user-submitted images with 90% accuracy of prediction, culminating in successful deployment on Vercel",
    type: "Software",
    status: "Complete",
    link: "https://plant-disease2.vercel.app",
    startingAt: new Date("2025-07-05"),
    photo: "images/ITFest.png",
  },
  {
    namaprojek: "PupukinAI",
    deskripsi:
      "Indonesia is rich in natural resources yet still relies heavily on imports. This project analyzes issues in local agricultural production and proposes a fertilizer pricing and distribution model to help predict future prices more effectively.",
    type: "Data",
    status: "Complete",
    link: "https://colab.research.google.com/drive/14ARYQsqzdHQ9pb4-PSuDY8n5iJN53g1i?usp=sharing",
    startingAt: new Date("2025-01-02"),
    photo: "images/PupukinAI.png",
  },
  {
    namaprojek: "BuyBuddy",
    deskripsi:
      "As a student, grocery shopping can drain your budget fast. Prices vary wildly between stores, but who has time to visit 5 supermarkets just to find the cheapest eggs or rice? So I built an app that scans local supermarkets and mini-markets to compare real-time prices for identical products. This is our UI/UX Competition Group Project.",
    type: "Software",
    status: "Complete",
    link: "https://www.figma.com/proto/kQISciy9d6JXM0R3ERYtSP/Tahu-Bulats?page-id=0%3A1&node-id=57-2&starting-point-node-id=94%3A80&t=vYzY9zKTjsChgsIZ-1",
    startingAt: new Date("2024-10-27"),
    photo: "images/buybuddy.png",
  },
  {
    namaprojek: "Satria Data: Deforestasi Indonesia",
    deskripsi:
      "An infographic Poster Competition mainly discussed about forest problems in Indonesia in order to implemented SGD 13 which discussed  about climate actions. This is a Group Poster Competition that helps us to sharpen our database analytics skills.",
    type: "Data",
    status: "Complete",
    link: "https://www.canva.com/design/DAGHcEvnD5c/VaGzB1aBYvQ4Brc0UhVKqw/edit?utm_content=DAGHcEvnD5c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    startingAt: new Date("2024-06-20"),
    photo: "images/SatriaData.png",
  },
  {
    namaprojek: "ASEAN DSE Competition: Overcoming Malnutrition",
    deskripsi:
      "Malnutrition is a mainly task in SGD since 2020, this analysis discusses about malnutrition in Indonesia as the affect of centralized distribution of healthy food. This is an International Group Competition in order to learn and explain using various tools database analyst.",
    type: "Data",
    status: "Complete",
    link: "https://drive.google.com/file/d/1S0CjOChLQVjFwaxdEPYr8KhkMvElJq1y/view?usp=sharing",
    startingAt: new Date("2024-06-14"),
    photo: "images/ASEANDSE.png",
  }
];

export default function Projects({ type }: ProjectsProps) {
  const [projects] = useState<Project[]>(allProjects);

  const filteredProjects = projects
    .filter((p) => p.type === type)
    .sort(
      (a, b) =>
        new Date(b.startingAt).getTime() - new Date(a.startingAt).getTime()
    );

  const formatdate = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

  return (
    <div className="flex flex-row space-x-8 p-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-blue-400 font-bold mb-2 drop-shadow-[0_0_3px_#3b82f6]">
          {type} Projects
        </h2>

        <div className="flex flex-row flex-wrap gap-4">
          {filteredProjects.map((p) => (
            <a
              key={p.namaprojek}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative max-w-sm rounded-xl bg-gray-900 p-4 shadow-[0_0_6px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInLeft overflow-hidden"
            >
              {p.photo && (
                <img
                  src={p.photo}
                  alt={p.namaprojek}
                  className="rounded-lg mb-3 w-full h-48 object-cover border border-gray-700"
                />
              )}

              <div className="flex flex-row space-x-4 items-center">
                <h3 className="text-white font-semibold text-lg break-words">
                  {p.namaprojek}
                </h3>
                <span
                  className={`text-xs text-white italic px-2 w-20 rounded-full h-4 ${
                    p.status.toLowerCase() === "complete"
                      ? "bg-green-600 shadow-sm"
                      : "bg-yellow-500 shadow-sm"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="text-gray-100 font-semibold text-sm">
                {formatdate(p.startingAt)}
              </p>
              <p className="text-gray-100 text-sm mt-4 break-words text-justify">
                {p.deskripsi}
              </p>

              <p className="text-gray-50 text-sm underline hover:text-blue-400">
                click here to see my project!
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}