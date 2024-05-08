import React from 'react';

const InputField = ({ type, placeholder, value, onChange }) => {
    return (
        <div>
            <input
                type={type}
                className='w-[417px] h-[75px] rounded-[64px] transition-all px-10 bg-[#EFEFEF] focus:bg-[#F5F8FF] focus:border-[#537FF1] placeholder-gray-500'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
