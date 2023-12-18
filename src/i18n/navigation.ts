import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["pt", "en"] as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  "/": "/",
  "pet-sitting": "pet-sitting",
  "/adopt": {
    pt: "/adotar",
    en: "/adopt",
  },
  "/sponsor": {
    pt: "/apadrinhamento",
    en: "/sponsor",
  },
  "/pet-hotel": {
    pt: "/hotel-animal",
    en: "/pet-hotel",
  },
  "/doggy-daycare": {
    pt: "/creche-canina",
    en: "/doggy-daycare",
  },
  "/about-us": {
    pt: "/sobre-nos",
    en: "/about-us",
  },
  "/volunteer": {
    pt: "/voluntariado",
    en: "/volunteer",
  },
  "/donate": {
    pt: "/doar",
    en: "/donate",
  },
  "/privacy-policy": {
    pt: "/politica-privacidade",
    en: "/privacy-policy",
  },
  "/adoption-conditions": {
    pt: "/condicoes-adocao",
    en: "/adoption-conditions",
  },

  "/adopt/[id]": {
    pt: "/adotar/[id]",
    en: "/adopt/[id]",
  },
} as const;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
