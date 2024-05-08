import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import Error from '../assets/error'
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        setEmailError(validateEmail(inputEmail) ? '' : `Enter a valid email address`);
    };

    const validateEmail = (inputEmail) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
    };

    const isButtonEnabled = name.trim() !== '' && email.trim() !== '' && emailError === '';

    const formVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: '0%', opacity: 1, transition: { duration: 0.5 } },
        exit: { y: '-100%', opacity: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className='mt-[50px]'>
            <div></div>

            <h3 className='text-[36px] font-[400] font-covered-by-your-grace text-[#2DA950] flex justify-center'>Registration Form</h3>
            <h1 className='text-[56px] font-[600] leading-[67.2px] font-manrope flex justify-center text-center'>Start your success <br /> Journey here!</h1>

            <motion.div
                className='flex flex-col gap-6 justify-center items-center mt-10'
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
            >
                <InputField onChange={handleNameChange} value={name} placeholder="Enter your name" />
                <InputField onChange={handleEmailChange} value={email} placeholder="Enter your email" />
                <div className='relative -mt-4 mr-48'>
                    {emailError && <span className="text-red-500 flex flex-row justify-center items-center gap-2"><Error />{emailError}</span>}
                </div>

                <Link to='/success'>
                    <PrimaryButton
                        text="Submit"
                        width="417px"
                        height="77.22px"
                        disabled={!isButtonEnabled}
                    />
                </Link>
            </motion.div>
        </div>
    );
};

export default Register;
