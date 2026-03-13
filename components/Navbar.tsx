"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => navItems.map((i) => ({ ...i, active: pathname === i.href })),
    [pathname]
  );

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/65 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <div className="relative -space-x-2">
            {TEAM.members.map((m) => (
              <div
                key={m.name}
                className="relative inline-block size-9 overflow-hidden rounded-full ring-2 ring-primary/25 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              >
                <Image src={m.image} alt={m.name} width={36} height={36} className="object-cover" />
              </div>
            ))}
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            <span className="fx-text-gradient">{TEAM.name}</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {items.map(({ href, label, active }, i) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
              >
                <Link
                  href={href}
                  className={cn(
                    "relative rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    active ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-primary/12 fx-ring"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="md:hidden"
        >
          <div className="container mx-auto px-4 pb-4">
            <div className="fx-glass relative overflow-hidden rounded-2xl px-3 py-2">
              <ul className="grid gap-1">
                {items.map(({ href, label, active }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/12 text-foreground"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      <span>{label}</span>
                      <span className="text-xs text-muted-foreground">{active ? "You are here" : ""}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
