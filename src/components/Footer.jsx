import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[144px] bg-[#F5F5F5] rounded-[40px] p-[60px] border flex flex-row justify-between items-center font-manrope text-[#1C1C1C] mt-[60px]'>
            <p className='font-[500] text-[18px]'>© Talup 2023. All rights reserved</p>
            <div className='flex flex-row gap-6 underline '>
                <p className='font-[400] cursor-pointer'>Terms & Conditions</p>
                <p className='font-[400] cursor-pointer'>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer