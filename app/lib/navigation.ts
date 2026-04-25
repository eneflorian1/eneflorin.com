import { IconHome, IconBook, IconBookOpen, IconSparkles, IconUser } from "../icons";

export const NAV_ITEMS = [
  { href: "/", label: "Acasă", icon: IconHome, id: "home" },
  { href: "/books", label: "Cărți", icon: IconBook, id: "books" },
  { href: "/tutorials", label: "Tutoriale", icon: IconBookOpen, id: "tutorials" },
  { href: "/retea-neuronala", label: "Astăzi", icon: IconSparkles, id: "astazi" },
  { href: "/despre", label: "Despre", icon: IconUser, id: "about" },
];

export function isItemActive(href: string, pathname: string | null) {
  if (!pathname) return false;
  if (href === "/" ) return pathname === "/";
  return pathname.startsWith(href);
}
