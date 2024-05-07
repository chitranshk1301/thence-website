import React from 'react'

const PrimaryButton = (props) => {
  return (
    <div className="h-[88px] max-w-5xl max-h-[88px] pt-[31px] pb-[31px] pl-[40px] pr-[40px] bg-[#1C1C1C] hover:bg-[#4E4E4E] transition-all rounded-[100px] shadow-md cursor-pointer flex justify-center"
      style={{
        width: props.width, height: props.height
      }}
    >
      <p className='text-white'>
        {props.text} 
        <i>{props.icon}</i>
      </p>
    </div>
  )
}

export default PrimaryButton
