import React from 'react'

const InputField = (props) => {
    return (
        <div>
            <input
                type="text"
                className='w-[417px] h-[75px] rounded-[64px] transition-all px-10 bg-[#EFEFEF] focus:bg-[#F5F8FF] focus:border-[#537FF1] placeholder-gray-500'
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputField