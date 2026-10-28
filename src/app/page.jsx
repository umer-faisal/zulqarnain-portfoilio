import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import StudioStory from "@/components/sections/StudioStory";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import StudioMotion from "@/components/animations/StudioMotion";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <StudioMotion />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Introduction />
        <StudioStory />
        <SelectedWork />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
