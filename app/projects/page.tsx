import { ProjectsContent } from "@/components/ProjectsContent";

export const metadata = {
  title: "Projects | Wild Dogs",
  description: "Projects by Wild Dogs — a duo portfolio by Kenno and Erana.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Projects</h1>
        <p className="mb-12 text-muted-foreground">
          A selection of projects I&apos;ve worked on (mockups for portfolio).
        </p>
        <ProjectsContent />
      </div>
    </main>
  );
}
