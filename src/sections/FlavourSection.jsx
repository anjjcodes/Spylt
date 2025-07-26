import React from 'react'
import FlavorTitle from '../components/FlavorTitle'
import FlavorSlider from '../components/FlavorSlider'

const FlavourSection = () => {
  return (
    <section className='flavor-section '>
      <div className='h-full flex lg:flex-row flex-col items-center relative'>
        <div className='lg:2-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0'>
          <FlavorTitle/>
        </div>
        <div className='h-full '>
          <FlavorSlider/>
        </div>
      </div>

    </section>
  )
}

export default FlavourSection
