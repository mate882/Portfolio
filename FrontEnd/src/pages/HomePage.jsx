
import React from "react";
import HeroSection from '../components/sections/HomePage/HeroSection'
import ActionButtons from '../components/sections/HomePage/ActionButtons'
import LanguageSection from '../components/sections/HomePage/LanguageSection'
import Services from '../components/sections/HomePage/Servicessection'

function HomePage() {
  return (
    <>
      <HeroSection></HeroSection>
      <ActionButtons></ActionButtons>
      <LanguageSection></LanguageSection>
      <Services></Services>
    </>
  );
}

export default HomePage
