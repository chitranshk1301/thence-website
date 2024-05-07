import React, { useState } from 'react';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

const Register = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleInput1Change = (event) => {
        setInput1(event.target.value);
    };

    const handleInput2Change = (event) => {
        setInput2(event.target.value);
    };

    const isButtonEnabled = input1.trim() !== '' && input2.trim() !== '';

    return (
        <div className='mt-[50px]'>
            <div></div>

            <h3 className='text-[36px] font-[400] font-covered-by-your-grace text-[#2DA950] flex justify-center'>Registration Form</h3>
            <h1 className='text-[56px] font-[600] leading-[67.2px] font-manrope flex justify-center text-center'>Start your success <br /> Journey here!</h1>

            <form className='flex flex-col gap-8 justify-center items-center mt-10'>
                <InputField onChange={handleInput1Change} placeholder="Enter your name" />
                <InputField onChange={handleInput2Change} placeholder="Enter your email" />

                <PrimaryButton
                    text="Submit"
                    width="417px"
                    height="77.22px"
                    disabled={!isButtonEnabled}
                />
            </form>
        </div>
    );
};

export default Register;
