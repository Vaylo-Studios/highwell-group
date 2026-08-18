import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Proof from "@/components/sections/Proof";
import WeirdStuff from "@/components/sections/WeirdStuff";
import StatsBar from "@/components/sections/StatsBar";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Proof />
      <WeirdStuff />
      <StatsBar />
      <CtaBand />
    </>
  );
}
