"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Folder } from "lucide-react";

const MOCK_PROJECTS = [
  {
    title: "Web App Dashboard",
    description:
      "A responsive admin dashboard built with Laravel and Bootstrap for managing content and users.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "E-Commerce Backend",
    description:
      "RESTful API and admin panel for a small e-commerce system with product and order management.",
    stack: ["PHP", "MySQL", "JavaScript"],
    link: "#",
  },
  {
    title: "Wild Dogs Duo Portfolio",
    description:
      "A clean, futuristic team portfolio with an AI assistant. Built with Next.js, Gemini, and Redis.",
    stack: ["Next.js", "TypeScript", "Gemini AI", "Redis"],
    link: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ProjectsContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {MOCK_PROJECTS.map((project) => (
        <motion.div key={project.title} variants={item}>
          <Card className="fx-glass flex flex-col transition-shadow hover:shadow-xl">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Folder className="size-5 text-primary" />
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                </div>
                <a
                  href={project.link}
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="flex-1 text-sm text-muted-foreground">
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
