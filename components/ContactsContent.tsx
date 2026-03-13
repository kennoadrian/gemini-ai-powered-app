"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const EMAILS = [
  { label: "Kenno", value: "kennoadrianricaplaza@gmail.com" },
  { label: "Erana", value: "jeoerana@gmail.com" },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

export function ContactsContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item}>
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Mail className="size-5 text-primary" />
            <h2 className="text-lg font-semibold">Email</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {EMAILS.map((e) => (
                <div key={e.value} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-sm font-medium text-foreground">{e.label}:</span>
                  <a
                    href={`mailto:${e.value}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {e.value}
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={item}>
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <MessageSquare className="size-5 text-primary" />
            <h2 className="text-lg font-semibold">AI assistant</h2>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Use the chat button at the bottom right to ask about Kenno or Erana.
            The assistant answers from the team portfolio info.
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
