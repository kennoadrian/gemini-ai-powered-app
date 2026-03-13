"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, User, Wrench, Palette, Target } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    content:
      "I'm a 3rd year Bachelor of Science in Information Technology (BSIT) student at Lapu-Lapu City College in Lapu-Lapu City, Philippines.",
  },
  {
    icon: User,
    title: "Background",
    content:
      "I'm a passionate IT student who enjoys building web applications and continuously improving my programming skills. I'm interested in developing modern web systems and exploring new technologies in software development.",
  },
  {
    icon: Wrench,
    title: "Technical skills",
    children: (
      <>
        <p className="mb-3 text-muted-foreground">
          I work with these technologies for web and backend development:
        </p>
        <ul className="flex flex-wrap gap-2">
          {["JavaScript", "PHP", "MySQL", "Bootstrap", "Laravel"].map((tech) => (
            <li
              key={tech}
              className="rounded-lg bg-muted px-3 py-1.5 text-sm font-medium text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: Palette,
    title: "Hobbies & interests",
    content:
      "Outside of programming, I enjoy digital art and motorcycle modification — both let me combine creativity with hands-on work.",
  },
  {
    icon: Target,
    title: "Goal",
    content:
      "I aim to keep growing as a software developer and contribute to real-world technology projects in the future.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {cards.map((card) => (
        <motion.div key={card.title} variants={item}>
          <Card className="overflow-hidden transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <card.icon className="size-5 text-primary" />
              <h2 className="text-lg font-semibold">{card.title}</h2>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {card.children ?? card.content}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
