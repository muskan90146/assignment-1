import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <SecondSection />
    </>
  );
}