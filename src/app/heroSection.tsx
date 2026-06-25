"use client";

import { useEffect, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import PixelCatLogo from "./pixelCatLogo";

//roles
const roles = [
  "Oracle EBS Developer",
  "Data Engineer",
  "ERP Specialist",
  "BackEnd Developer",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const role = roles[roleIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-[#1F1825] bg-[#15111A] px-6 pt-28 text-[#EDE6F0] sm:px-10 lg:px-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(201,123,132,0.14),transparent_32%),radial-gradient(circle_at_42%_84%,rgba(124,129,166,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.42em] text-[#8C8295]">
            Hello, I&apos;m
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold uppercase leading-none tracking-[0.16em] text-[#EDE6F0] sm:text-7xl lg:text-8xl">
            Natasha
          </h1>
          <p
            className="mt-6 min-h-6 overflow-hidden text-sm font-medium uppercase tracking-[0.48em] text-[#C97B84]"
            aria-live="polite"
          >
            <span key={role} className="inline-block animate-role-switch">
              {role}
            </span>
          </p>
          <p className="mt-8 max-w-md text-base leading-8 text-[#8C8295]">
            I build data-driven ERP projects with scalable backend systems that transform business data into 
            practical solutions, improving business processes and digital workflows.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-4 border-b border-[#C97B84] pb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#C97B84] transition-colors duration-300 hover:text-[#EDE6F0]"
            >
              View my work
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://binusianorg-my.sharepoint.com/personal/natasha_mahardita_binus_ac_id/_layouts/15/guestaccess.aspx?share=EQC7OQAIAkhNqWum2iEQjU4BJKbheZl_1O9hcEg_NBxgQg&e=tYyTXi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-3 rounded-full border border-[#1F1825] bg-[#1F1825] px-5 text-xs font-medium uppercase tracking-[0.18em] text-[#EDE6F0] transition duration-300 hover:border-[#7C81A6] hover:text-[#7C81A6]"
            >
              <FileText aria-hidden="true" className="size-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
          <div className="absolute size-80 rounded-full border border-dashed border-[#1F1825]" />
          <div className="absolute size-56 rounded-full border border-dashed border-[#1F1825]" />
          <div className="absolute size-36 rounded-full border border-[#C97B84]/70 bg-[#1F1825] shadow-[inset_18px_-18px_36px_rgba(201,123,132,0.12)]" />
          <span className="absolute right-10 top-24 size-3 rounded-full border border-[#C97B84] bg-[#C97B84]" />
          <span className="absolute bottom-24 left-20 size-3 rounded-full border border-[#7C81A6] bg-[#7C81A6]" />
          <div className="relative flex size-28 items-center justify-center rounded-full border border-[#1F1825] bg-[#1F1825]">
            <PixelCatLogo className="scale-[2.3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
