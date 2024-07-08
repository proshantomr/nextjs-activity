import Image from "next/image";
import Navbar from "@/app/components/common/navbar/Navbar";
import HeroSection from "@/app/(publicPage)/homeComponent/HeroSection";
import Testomonial from "@/app/(publicPage)/homeComponent/Testomonial";
import TipsSection from "@/app/(publicPage)/homeComponent/TipsSection";
import AboutSection from "@/app/(publicPage)/homeComponent/AboutSection";
import LostItem from "@/app/(publicPage)/homeComponent/lostItem";
import Footer from "@/app/components/common/footer/Footer";

export default function Home() {
  return (
      <div>
          <Navbar/>
          <main className="container mx-auto px-50">

              <HeroSection/>
              <Testomonial/>
              <TipsSection/>
              <AboutSection/>
              <LostItem/>
          </main>
         <Footer/>
      </div>

  )
}
