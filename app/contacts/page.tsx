import { ContactsContent } from "@/components/ContactsContent";

export const metadata = {
  title: "Contacts | Wild Dogs",
  description: "Get in touch with the Wild Dogs duo (Kenno and Erana).",
};

export default function ContactsPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto max-w-3xl px-4 py-14 sm:py-16">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Contacts</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            <span className="fx-text-gradient">Contacts</span>
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Reach out for collaborations, questions, or just to say hi.
          </p>
        </div>
        <ContactsContent />
      </div>
    </main>
  );
}
