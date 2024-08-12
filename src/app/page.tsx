"use client"; //todo remove use client from here
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <section className="min-h-screen" id="home">
        <Hero />
      </section>
    </main>
  );
}
