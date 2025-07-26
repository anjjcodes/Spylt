import { useEffect } from "react"
import NavBar from "./components/NavBar"
import FlavourSection from "./sections/FlavourSection"
import HeroSection from "./sections/HeroSection"
import MessageSection from "./sections/MessageSection"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import NutritionSection from "./sections/NutritionSection"
import BenefitSection from "./sections/BenefitSection"
import TestimonialSection from "./sections/TestimonialSection"
import FooterSection from "./sections/FooterSection"


const App = () => {


  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <MessageSection/>
      <FlavourSection/>
      <NutritionSection/>

      <div>
        <BenefitSection/>
      <TestimonialSection/>
      </div>

      <FooterSection/>
      
   
    </main>
  )
  
}

export default App
