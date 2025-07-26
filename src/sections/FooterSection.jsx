import React from 'react'
import dip2 from '../public/images/footer-dip.png'
import splash from '../public/videos/splash.mp4'
import yt from '../public/images/yt.svg'
import insta from '../public/images/insta.svg'
import tiktok from '../public/images/tiktok.svg'
import arrow from '../public/images/arrow.svg'
import footer from '../public/images/footer-drink.png'
import { useMediaQuery } from 'react-responsive'


const FooterSection = () => {

    const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <section className='footer-section'>
        <img src={dip2} alt="" className='w-full object-cover translate-y-1' />

        <div className="relative pt-[10vh] md:pt-[20vh] pb-32">


        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>


        {
            isMobile ? (
                <img src={footer} alt="" className="absolute top-0 object-contain" />
            ) : (
                <video src={splash} autoPlay playsInline muted className='absolute top-0 object-contain mix-blend-lighten'></video>

            
        )}
        
        <div className='flex-center gap-5 relative z-10 md:mt-29 mt-5'>
            <div className='social-btn'>
                <img src={yt} alt="" />
            </div>
            <div className='social-btn'>
                <img src={insta} alt="" />
            </div>
            <div className='social-btn'>
                <img src={tiktok} alt="" />
            </div>
           
        </div>
        <div className='mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium'>
            <div className='flex items-center md:gap-16 gap-5'>
                <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
            </div>
            <div className='md:max-w-lg'>
                <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] pt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box ">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default FooterSection
