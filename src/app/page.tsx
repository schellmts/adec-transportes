import CarouselHeader from "@/components/elements/Carousel";
import Navbar from "@/components/elements/Navbar";
import { NavbarMobile } from "@/components/elements/NavbarMobile";
import About from "@/components/resources/About";
import Choose from "@/components/resources/Choose";
import Services from "@/components/resources/Services";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="w-full font-montserrat">
      <CarouselHeader />
      {/* <NavbarMobile /> */}
      <div className="p-32 flex flex-col gap-20">
        <About />
        <Services />
        <Choose />
      </div>
    </div>
  );
}