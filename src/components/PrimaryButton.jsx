import React from 'react'

const PrimaryButton = (props) => {
  return (
    <div className="max-w-5xl max-h-[88px] py-[31px] px-[40px] bg-[#1C1C1C] hover:bg-[#4E4E4E] transition-all rounded-[100px] border cursor-pointer flex justify-center"
      style={{
        width: props.width, height: props.height
      }}
    >
      <p className='text-white flex justify-center items-center text-[18px] font-[600]'>
        {props.text} 
        <i>{props.icon}</i>
      </p>
    </div>
  )
}

export default PrimaryButton
