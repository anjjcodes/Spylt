
import pin_video from '../public/videos/pin-video.mp4'
import circle from '../public/images/circle-text.svg'
import play from '../public/images/play.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
const VideoPinSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    })
    useGSAP(() => {
        if(!isMobile){
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".vd-pin-section",
                start: '-15% top',
                end: "120% top",
                scrub: 1.5,
                pin:true,

            }
        })
        tl.to(".video-box", {
            clipPath:"circle(100% at 50% 50%)",
            ease:"power1.inOut",

        })
        }
    })
  return (
    <section className="vd-pin-section">
        <div style={{
            clipPath: isMobile 
            ? "circle(100% at 50% 50%)" 
            : "circle(0% at 50% 50%)",

        }} className="size-full video-box" >
            <video src={pin_video} playsInline muted loop autoPlay></video>
            <div className='abs-center md:scale-100 scale-200 '>
                <img src={circle} alt="" className='spin-circle' />
                <div className='play-btn'>
                    <img src={play} alt="" className='size-[3vw] ml-[.5vw]'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoPinSection
