import { AboutContent } from "@/components/AboutContent";

export const metadata = {
  title: "About | Wild Dogs",
  description: "Meet the Wild Dogs duo — background, skills, and goals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold text-foreground">About Wild Dogs</h1>
        <p className="mb-12 text-muted-foreground">
          Two members, one team — a quick look at who we are.
        </p>
        <AboutContent />
      </div>
    </main>
  );
}
