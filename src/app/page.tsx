import CarouselHeader from "@/components/elements/Carousel";
import Navbar from "@/components/elements/Navbar";
import { NavbarMobile } from "@/components/elements/NavbarMobile";
import WhatsApp from "@/components/elements/WhatsApp";
import About from "@/components/resources/About";
import Cars from "@/components/resources/Cars";
import Choose from "@/components/resources/Choose";
import Contact from "@/components/resources/Contact";
import Footer from "@/components/resources/Footer";
import Services from "@/components/resources/Services";

export default function Home() {
  return (
    <div className="w-full font-montserrat relative">
      <CarouselHeader />
      <div className="p-32 max-xl:p-10 flex flex-col gap-20">
        <About />
        <Services />
        <Choose />
        <Cars />
      </div>
      <div>
        <Contact />
        <Footer />
      </div>
      <div className="fixed bottom-10 right-10 z-30">
        <WhatsApp />
      </div>
    </div>
  );
}