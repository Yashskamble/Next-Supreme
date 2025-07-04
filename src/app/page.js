import ContactForm from "@/components/ContactForm";
import HeroSlide from "@/components/HeroSlide";
import PerformanceHero from "@/components/PerformanceHero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <PerformanceHero/>
    <HeroSlide/>
    <ContactForm/>
    </>
  );
}
