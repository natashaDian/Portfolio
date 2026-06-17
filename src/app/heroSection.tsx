import { ArrowRight, FileText } from "lucide-react";
import PixelCatLogo from "./pixelCatLogo";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-[#1E293B] bg-[#050816] px-6 pt-28 text-[#F8FAFC] sm:px-10 lg:px-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_42%_84%,rgba(139,92,246,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.42em] text-[#94A3B8]">
            Hello, I&apos;m
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-[#F8FAFC] sm:text-7xl lg:text-8xl">
            Natasha
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.48em] text-[#38BDF8]">
            Oracle EBS Developer
          </p>
          <p className="mt-8 max-w-md text-base leading-8 text-[#94A3B8]">
            I build enterprise solutions, automate business processes, and
            deliver reliable value through Oracle EBS, PL/SQL, and workflow
            customization.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-4 border-b border-[#38BDF8] pb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#38BDF8] transition-colors duration-300 hover:text-[#F8FAFC]"
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
              className="inline-flex h-12 items-center gap-3 rounded-full border border-[#1E293B] bg-[#050816] px-5 text-xs font-medium uppercase tracking-[0.18em] text-[#F8FAFC] transition duration-300 hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
            >
              <FileText aria-hidden="true" className="size-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
          <div className="absolute size-80 rounded-full border border-dashed border-[#1E293B]" />
          <div className="absolute size-56 rounded-full border border-dashed border-[#1E293B]" />
          <div className="absolute size-36 rounded-full border border-[#38BDF8]/70 bg-[#050816] shadow-[inset_18px_-18px_36px_rgba(56,189,248,0.12)]" />
          <span className="absolute right-10 top-24 size-3 rounded-full border border-[#38BDF8] bg-[#38BDF8]" />
          <span className="absolute bottom-24 left-20 size-3 rounded-full border border-[#8B5CF6] bg-[#8B5CF6]" />
          <div className="relative flex size-28 items-center justify-center rounded-full border border-[#1E293B] bg-[#050816]">
            <PixelCatLogo className="scale-[2.3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
