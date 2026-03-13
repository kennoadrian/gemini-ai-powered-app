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
      <section className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="relative mb-6 flex items-center justify-center gap-3"
          >
            <motion.div
              initial={{ rotate: -6 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
              className="overflow-hidden rounded-full ring-4 ring-primary/20 shadow-xl"
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
              className="overflow-hidden rounded-full ring-4 ring-primary/20 shadow-xl"
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
            className="mb-2 text-sm font-medium uppercase tracking-wider text-primary"
          >
            Duo portfolio
          </motion.p>
          <motion.h1
            variants={item}
            className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Wild Dogs
          </motion.h1>
          <motion.p
            variants={item}
            className="mb-10 max-w-xl text-lg text-muted-foreground"
          >
            A clean, futuristic team portfolio by Kenno and Erana — building skills, projects, and ideas together.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 transition-transform hover:scale-[1.02]"
              )}
            >
              Meet the team <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 transition-transform hover:scale-[1.02]"
              )}
            >
              <Code2 className="size-4" /> Projects
            </Link>
            <Link
              href="/contacts"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "gap-2 transition-transform hover:scale-[1.02]"
              )}
            >
              <Users className="size-4" /> Contact
            </Link>
          </motion.div>
          <motion.p
            variants={item}
            className="mt-12 text-sm text-muted-foreground"
          >
            Have a question? Use the chat button to ask about Kenno or Erana.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}
