import { AboutContent } from "@/components/AboutContent";

export const metadata = {
  title: "About | Kenno Adrian B. Ricaplaza",
  description: "About Kenno Adrian — education, skills, hobbies, and goals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold text-foreground">About me</h1>
        <p className="mb-12 text-muted-foreground">
          A bit about my background and what I do.
        </p>
        <AboutContent />
      </div>
    </main>
  );
}
