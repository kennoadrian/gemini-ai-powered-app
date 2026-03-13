import { ProjectsContent } from "@/components/ProjectsContent";

export const metadata = {
  title: "Projects | Wild Dogs",
  description: "Projects by Wild Dogs — a duo portfolio by Kenno and Erana.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Projects</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            <span className="fx-text-gradient">Projects</span>
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A selection of projects we&apos;ve worked on (mockups for portfolio).
          </p>
        </div>
        <ProjectsContent />
      </div>
    </main>
  );
}
