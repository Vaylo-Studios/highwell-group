import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Proof from "@/components/sections/Proof";
import Process from "@/components/sections/Process";
import WeirdStuff from "@/components/sections/WeirdStuff";
import Industries from "@/components/sections/Industries";
import Scale from "@/components/sections/Scale";
import StatsBar from "@/components/sections/StatsBar";
import Manifesto from "@/components/sections/Manifesto";
import Pathways from "@/components/sections/Pathways";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Proof />
      <Process />
      <WeirdStuff />
      <Industries />
      <Scale />
      <StatsBar />
      <Manifesto />
      <Pathways />
      <CtaBand />
    </>
  );
}
