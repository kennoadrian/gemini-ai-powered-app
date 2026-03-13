import { ContactsContent } from "@/components/ContactsContent";

export const metadata = {
  title: "Contacts | Wild Dogs",
  description: "Get in touch with the Wild Dogs duo (Kenno and Erana).",
};

export default function ContactsPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto max-w-xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Contacts</h1>
        <p className="mb-12 text-muted-foreground">
          Reach out for collaborations, questions, or just to say hi.
        </p>
        <ContactsContent />
      </div>
    </main>
  );
}
