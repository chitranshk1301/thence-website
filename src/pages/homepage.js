import React from 'react'
import Carousel from '../components/Carousel'
import PrimaryButton from '../components/PrimaryButton'
import Image from '../assets/image.png'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Union from '../assets/union'

const HomePage = () => {
  return (
    <div className='mt-[50px] p-[24px]'>
      {/* Success stories section */}
      <h3 className='text-[36px] font-[400] font-covered-by-your-grace text-[#2DA950] flex justify-center'>Success Stories</h3>
      <h1 className='text-[56px] font-[600] leading-[67.2px] font-manrope flex justify-center text-center'>Every success journey <br /> we’ve encountered.</h1>

      <div className='flex flex-col md:flex-row h-screen gap-2 mt-24 md:px-[54px] px-4'>
        <div className='w-[727.49px] h-[596px] relative -z-50'>
          <img src={Image}
            className='w-[506.98px] h-[546.27px] rounded-[50.7px] ml-[144.69px]'
          />
          <Card1 />
          <Card2 />
          <Card3 />
        </div>

        <div className='flex flex-col gap-10 ml-24'>
          <div>
            <Carousel
              items={[
                { content: `Enhance fortune 50 company’s insights teams research capabilities`, style: 'text-red-500' },
                { content: 'Enhance fortune 50 company’s insights teams research capabilities', style: 'text-green-500' },
                { content: 'Enhance fortune 50 company’s insights teams research capabilities', style: 'text-blue-500' },
              ]}
            />
          </div>
          <div>
            <PrimaryButton
              text="Explore More  →"
              width="245px"
              height="88px"
            />
          </div>
        </div>

      </div>
      {/* Success stories section ends */}

      <div className='h-screen border bg-[#E8EEE7] rounded-[40px] px-[32px]'>
        <div>
          <h3 className='font-covered-by-your-grace text-[32px] text-[#9E9D9D] font-[400]'>What’s on your mind</h3>
          <h1 className='font-manrope text-[60px] font-[600]'>Ask Questions</h1>
          <div className='mt-12'>
            <Union />
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default HomePage
