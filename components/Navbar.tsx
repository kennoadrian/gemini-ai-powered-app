"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TEAM = {
  name: "Wild Dogs",
  members: [
    { name: "Kenno", image: "/kennoprofile.jpg" },
    { name: "Erana", image: "/enoprofile.jpg" },
  ],
} as const;

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contacts", label: "Contacts" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <div className="relative -space-x-2">
            {TEAM.members.map((m) => (
              <div
                key={m.name}
                className="relative inline-block size-9 overflow-hidden rounded-full ring-2 ring-primary/30"
              >
                <Image src={m.image} alt={m.name} width={36} height={36} className="object-cover" />
              </div>
            ))}
          </div>
          <span className="text-lg font-semibold text-foreground">{TEAM.name}</span>
        </Link>
        <ul className="flex items-center gap-1">
          {navItems.map(({ href, label }, i) => (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.25 }}
            >
              <Link
                href={href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {pathname === href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
