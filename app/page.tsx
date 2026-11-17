import Header from "@/components/Header";
import Catalogue from "@/components/Catalogue";
import Collections from "@/components/Collections";
import Hero from "@/components/Hero";
import LightWarm from "@/components/LightWarm";
import Sport from "@/components/Sport";
import RainProtect from "@/components/RainProtect";

export default function Home() {
  return (
    <>
      <Header />
      <main id="accueil">
        <Hero />
        <LightWarm />
        <RainProtect />
        <Collections />
        <Sport />
        <Catalogue />
      </main>
    </>
  );
}
