"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Cake, GraduationCap, Heart, Home, Mail, Palette, Target, User, Wrench } from "lucide-react";

type InfoCard = {
  icon: typeof GraduationCap;
  title: string;
  content?: string;
  children?: ReactNode;
};

const TEAM = [
  {
    key: "kenno",
    name: "Kenno Adrian B. Ricaplaza",
    photo: "/kennoprofile.jpg",
    cards: [
      {
        icon: GraduationCap,
        title: "Education",
        content:
          "3rd year Bachelor of Science in Information Technology (BSIT) student at Lapu-Lapu City College (Lapu-Lapu City, Philippines).",
      },
      {
        icon: User,
        title: "Background",
        content:
          "Passionate IT student who enjoys building web applications, improving programming skills, and exploring modern web systems.",
      },
      {
        icon: Wrench,
        title: "Technical skills",
        children: (
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
        ),
      },
      {
        icon: Palette,
        title: "Hobbies & interests",
        content: "Digital art and motorcycle modification.",
      },
      {
        icon: Target,
        title: "Goal",
        content: "Keep growing as a software developer and contribute to real-world technology projects.",
      },
    ],
  },
  {
    key: "erana",
    name: "Erana Jeo I",
    photo: "/enoprofile.jpg",
    cards: [
      { icon: Cake, title: "Birthday", content: "March 26, 2005 (20 years old)" },
      { icon: Mail, title: "Email", content: "jeoerana@gmail.com" },
      { icon: Home, title: "Address", content: "Purok Thunder, Babag Lapu lapu city" },
      { icon: Heart, title: "Favorite color", content: "Red" },
      {
        icon: Palette,
        title: "Hobbies",
        children: (
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Playing computer games</li>
            <li>Watching movies</li>
          </ul>
        ),
      },
      {
        icon: Wrench,
        title: "IT skills",
        children: (
          <ul className="flex flex-wrap gap-2">
            {[
              "Networking skills",
              "Routing",
              "Stress management",
              "Teamwork",
              "Relationship skills",
              "Cooperative",
            ].map((skill) => (
              <li
                key={skill}
                className="rounded-lg bg-muted px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        ),
      },
    ],
  },
] satisfies ReadonlyArray<{
  key: string;
  name: string;
  photo: string;
  cards: InfoCard[];
}>;

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
      className="space-y-10"
    >
      {TEAM.map((member) => (
        <motion.section key={member.key} variants={item} className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="relative size-14 overflow-hidden rounded-full ring-2 ring-primary/25">
              <Image src={member.photo} alt={member.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{member.name}</h2>
              <p className="text-sm text-muted-foreground">Wild Dogs member</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {member.cards.map((card) => (
              <Card key={card.title} className="overflow-hidden transition-shadow hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <card.icon className="size-5 text-primary" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </CardHeader>
                <CardContent className="text-muted-foreground">{card.children ?? card.content}</CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
}
