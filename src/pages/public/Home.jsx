import EditorialTicker from "../../components/public/EditorialTicker";
import HeroSection from "../../components/public/HeroSection";
import MenuHighlight from "../../components/public/MenuHighlight";
import WelcomeAddress from "../../components/public/WelcomeAddress";
import WhatWeDo from "../../components/public/WhatWeDo";
import Experience from "../../components/public/Experience";
import CTA from "../../components/public/CTA";
import StatsCounter from "../../components/public/StatsCounter";
import Partners from "../../components/public/Partners";
import CustomersReviews from "../../components/public/CustomersReviews";
import SocialVideoSpotlight from "../../components/public/SocialVideoSpotlight";
import MenuPdfViewer from "../../components/public/MenuPdfViewer";
import AccoladesBanner from "../../components/public/AccoladesBanner";
import DishGallery from "../../components/public/DishGallery";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Screen Immersive Experience */}
      <HeroSection />

      {/* Our Story Section */}
      <WelcomeAddress />

      {/* What We Do Section */}
      <WhatWeDo />


      <DishGallery />

    {/* CTA Section */}
      <CTA />


      {/* Stats Counter Section */}
      <StatsCounter />

    {/* Ambient Spacing Section */}
      <Experience />
      
      {/* Partners & Affiliations Carousel */}
      <Partners />


   {/* Customer Reviews Carousel */}
      <CustomersReviews />


      {/* Social Media Video Spotlight */}
      <SocialVideoSpotlight />
     

  


    </div>
  );
}
