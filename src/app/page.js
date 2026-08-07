import HeroSection from "@/component/home/HeroSection";
import About from "@/component/home/About";
import KeyFeature from "@/component/home/KeyFeature";
import WorkFlow from "@/component/home/WorkFlow";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Contact from "@/component/home/Contact";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <WorkFlow />
      <KeyFeature />
      <WhyChooseUs />
      <Contact/>
    </div>
  );
}
