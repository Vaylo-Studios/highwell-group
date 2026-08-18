import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Capabilities from "@/components/sections/Capabilities";
import Scale from "@/components/sections/Scale";
import Proof from "@/components/sections/Proof";
import Process from "@/components/sections/Process";
import WeirdStuff from "@/components/sections/WeirdStuff";
import Industries from "@/components/sections/Industries";
import Pathways from "@/components/sections/Pathways";
import Manifesto from "@/components/sections/Manifesto";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Capabilities />
      <Proof />
      <Process />
      <Scale />
      <WeirdStuff />
      <Industries />
      <Pathways />
      <Manifesto />
      <CtaBand />
    </>
  );
}
