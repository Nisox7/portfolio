import { Navbar } from "@/components/navbar";

// default.tsx
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-black">
      <div className="min-h-100vh bg-black">
        <Navbar />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
      </div>
    </div>
  );
}