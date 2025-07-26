import React from 'react'
import hero_img from '../public/images/hero-img.png'
import staticimg from '../public/images/static-img.png'
import { useGSAP } from '@gsap/react'
import hero_bg from '../public/images/hero-bg.png'
import herobg from '../public/videos/hero-bg.mp4'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",

  })

  useGSAP(()=> {
    const titleSplit = SplitText.create(".hero-title", {
      type : "chars",

    })

    const tl =gsap.timeline({
      delay : 1,
    })

    tl.to(".hero-content", {
      opacity : 1,
      y: 0,
      ease : "power1.inOut"
    }).to(".hero-text-scroll", {
      duration: 1,
      clipPath : "polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)",
      ease: "circ.out"
    }, "-=0.5")
    .from(titleSplit.chars, {
      yPercent : 200, 
      stagger: 0.02,
      ease: "power2.out",

    }, "-=0.5");

    const heroTl = gsap.timeline({
      scrollTrigger:{
        trigger:".hero-container",
        start: "1% top",
        end : "bottom top",
        scrub: true,
      }

    })
    heroTl.to(".hero-container", {
      rotate:7,
      scale:1,
      yPercent:30,
      ease:"power1.inOut"
    })
  }, []);


  return (
    <section className='bg-main-bg'>
        <div className='hero-container'>
            {isTablet ? (
              <>
              {isMobile && <img src={hero_bg} className='absolute bottom-40 size-full onject-cover'></img>}
              <img src={hero_img} className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto'></img>
              </>
            ) : (
              <video src={herobg} className='absolute inset-0 w-full h-full object-cover' 
              autoPlay muted playsInline></video>
            )}
            <div className='hero-content opacity-0'>
                <div className='overflow-hidden'>
                    <h1 className='hero-title font-sans'>Freaking Delicious</h1>

                </div>
                <div
                style={{
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                }}
                className='hero-text-scroll'>
                  <div className='hero-subtitle'>
                    <h1>Protein + Caffeine</h1>
                  </div>
                </div>
                <h2>
                  Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                </h2>
                <div className='hero-button'>
                  <p>Chug a SPYLT</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default HeroSection
