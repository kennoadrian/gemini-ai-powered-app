import { AboutContent } from "@/components/AboutContent";

export const metadata = {
  title: "About | Wild Dogs",
  description: "Meet the Wild Dogs duo — background, skills, and goals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto max-w-4xl px-4 py-14 sm:py-16">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">About</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            <span className="fx-text-gradient">About Wild Dogs</span>
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
          Two members, one team — a quick look at who we are.
          </p>
        </div>
        <AboutContent />
      </div>
    </main>
  );
}
