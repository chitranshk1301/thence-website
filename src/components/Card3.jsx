import React from 'react'
import Rocket from '../assets/Rocket'

const Card3 = () => {
    return (
        <div className='w-[245px] h-[88px] rounded-[111.54px] shadow-lg bg-white flex flex-row justify-center items-center gap-4 ml-24 -mt-48 relative z-50'>
            <Rocket />
            <div className='flex flex-col justify-center items-start'>
                <h1 className='font-manrope text-[24px] font-[700]'>
                    10 days
                </h1>
                <p className='font-manrope text-[16px] text-[#828282] font-[500]'>Staff Deployment</p>
            </div>
        </div>
    )
}

export default Card3