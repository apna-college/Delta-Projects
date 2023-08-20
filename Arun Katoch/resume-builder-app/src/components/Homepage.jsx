import React, { lazy, Suspense } from "react";
import LoadingComp from "./Loader/LoadingComp";
const Navbar = lazy(() => import("./Navbar"));
const HomepageContent = lazy(() => import("./HomepageContent"));
const HeroSection = lazy(() => import("./Hero/HeroSection"));
const Footer = lazy(() => import("./Footer/Footer"));


const Homepage = () => {
  return (
    <Suspense fallback={<LoadingComp />}>
      <Navbar />
      <HeroSection />
      <HomepageContent />
      <Footer />
    </Suspense>
  );
};

export default Homepage;
