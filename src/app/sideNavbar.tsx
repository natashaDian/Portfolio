"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import PixelCatLogo from "./pixelCatLogo";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Profile", href: "#profile", icon: UserRound },
];

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/natasha-dian-mahardita/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/natashadian",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:natasha.mahardita@binus.ac.id",
    icon: Mail,
  },
];

function cn(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function SideNavbar() {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const updateActiveHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);

    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-50 px-4 py-5 text-[#8C8295] sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a
          href="#home"
          aria-label="Natasha Dian Mahardita home"
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#1F1825] bg-[#1F1825] transition-colors duration-300 hover:border-[#C97B84]"
        >
          <PixelCatLogo />
        </a>

        <ul className="flex min-w-0 flex-1 items-center justify-center gap-2 overflow-x-auto px-1 sm:gap-3">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = activeHash === href;

            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group flex h-12 items-center gap-2 rounded-full border bg-[#1F1825] px-4 text-xs font-medium uppercase leading-none tracking-[0.14em] transition duration-300",
                    isActive
                      ? "border-[#C97B84] text-[#C97B84]"
                      : "border-[#1F1825] text-[#8C8295] hover:border-[#C97B84] hover:text-[#EDE6F0]",
                  )}
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.8}
                    className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex size-12 items-center justify-center rounded-full border border-[#1F1825] bg-[#1F1825] text-[#8C8295] transition duration-300 hover:border-[#7C81A6] hover:text-[#7C81A6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97B84] focus-visible:ring-offset-4 focus-visible:ring-offset-[#15111A]"
            >
              <Icon aria-hidden="true" strokeWidth={1.8} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
