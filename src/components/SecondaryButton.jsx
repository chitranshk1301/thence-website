import React from 'react'

const SecondaryButton = (props) => {
  return (
    <div className="w-[189.56px] h-[77.22px] max-w-5xl max-h-[88px] pt-[31px] pb-[31px] pl-[40px] pr-[40px] bg-white hover:bg-[#EAEAEA] transition-all rounded-[100px] shadow-md cursor-pointer flex justify-center">
      <p className='text-black'
        style={{
          width: props.width, height: props.height
        }}
      >
        {props.text}
        <i>{props.icon}</i>
      </p>
    </div>
  )
}

export default SecondaryButton
