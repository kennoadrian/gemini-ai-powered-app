"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Code2, ArrowRight, Users } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-5xl"
        >
          <div className="pointer-events-none absolute -inset-x-6 -top-10 -z-10 h-[420px] rounded-[2.5rem] bg-linear-to-r from-primary/10 via-primary/5 to-fuchsia-500/10 blur-2xl" />

          <div className="fx-glass fx-noise relative overflow-hidden rounded-[2.25rem] px-6 py-12 sm:px-10 md:px-14 md:py-14">
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -left-24 top-10 size-72 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -right-24 top-24 size-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-center lg:text-left">
          <motion.div
            variants={item}
            className="relative mb-7 flex items-center justify-center gap-3 lg:justify-start"
          >
            <motion.div
              initial={{ rotate: -6 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
              className="fx-float overflow-hidden rounded-full ring-4 ring-primary/20 shadow-xl"
            >
              <Image
                src="/kennoprofile.jpg"
                alt="Kenno Adrian B. Ricaplaza"
                width={148}
                height={148}
                priority
                className="aspect-square object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ rotate: 6 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.6, delay: 0.05 }}
              className="fx-float overflow-hidden rounded-full ring-4 ring-primary/20 shadow-xl [animation-delay:1.3s]"
            >
              <Image
                src="/enoprofile.jpg"
                alt="Erana Jeo I"
                width={148}
                height={148}
                priority
                className="aspect-square object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.p
            variants={item}
            className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-primary"
          >
            Duo portfolio
          </motion.p>
          <motion.h1
            variants={item}
            className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            <span className="fx-text-gradient">Wild Dogs</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mb-10 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            A clean, futuristic team portfolio by Kenno and Erana — building skills, projects, and ideas together.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
              )}
            >
              Meet the team <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
              )}
            >
              <Code2 className="size-4" /> Projects
            </Link>
            <Link
              href="/contacts"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "gap-2 transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
              )}
            >
              <Users className="size-4" /> Contact
            </Link>
          </motion.div>
          <motion.p
            variants={item}
            className="mt-10 text-sm text-muted-foreground"
          >
            Have a question? Use the chat button to ask about Kenno or Erana.
          </motion.p>
              </div>

              <motion.div
                variants={item}
                className="relative mx-auto w-full max-w-md"
              >
                <div className="fx-glass relative overflow-hidden rounded-3xl p-5">
                  <div className="pointer-events-none absolute inset-0 opacity-70">
                    <div className="absolute -top-16 left-10 size-56 rounded-full bg-primary/12 blur-3xl" />
                    <div className="absolute -bottom-20 right-10 size-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
                  </div>

                  <div className="relative space-y-3">
                    <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                      <p className="text-xs font-medium text-muted-foreground">AI assistant prompt ideas</p>
                      <p className="mt-2 text-sm text-foreground">
                        “What are Erana’s IT skills?” <br />
                        “What does Kenno study?” <br />
                        “Summarize the team’s goal.”
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-background/30 p-4">
                      <p className="text-xs font-medium text-muted-foreground">Design language</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-xl bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground">
                          Glass
                        </span>
                        <span className="rounded-xl bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground">
                          Neon
                        </span>
                        <span className="rounded-xl bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground">
                          Responsive
                        </span>
                        <span className="rounded-xl bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground">
                          Motion
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
