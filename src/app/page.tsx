//landing page 
"use client"; 
import Hero from "@/components/Hero";
import PhotoCollage from "@/components/PhotoCollage";
import PopPackages from "@/components/PopPackages";
import SriLankaMap from "@/components/SriLankaMap";
import Navbar from "@/components/Navbar";
import SubmitForm from "@/components/SubmitForm";


export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <section className="min-h-screen" id="home">
        <Navbar />
        <Hero />
        <PopPackages/>
        <SriLankaMap/>
        <PhotoCollage/>
        <SubmitForm/>
      </section>
    </main>
  );
}
