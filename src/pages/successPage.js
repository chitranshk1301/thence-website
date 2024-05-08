import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header2';
import Tick from '../assets/tick';

const SuccessPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, countdown * 1000);

        return () => clearTimeout(timer);
    }, [countdown, navigate]);

    const formVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: '0%', opacity: 1, transition: { duration: 0.5 } },
        exit: { y: '-100%', opacity: 0, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Header />
            <motion.div
                className='flex flex-col gap-4 justify-center items-center'
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
            >
                <Tick />
                <h3 className='text-[36px] font-[400] font-covered-by-your-grace text-[#2DA950] flex justify-center mt-[20px]'>Success Submitted</h3>
                <h1 className='text-[56px] font-[600] leading-[67.2px] font-manrope flex justify-center text-center'>Congratulations</h1>
                <p className='font-manrope text-[27px] text-[#727272] font-[500] text-center'>Your request has been successfully submitted to us. We <br /> will validate your information and reach out to your <br /> shortly with updates</p>

                <p className='font-manrope text-[26px] font-normal leading-[26px] text-center mt-36'>
                    Redirecting you to Homepage in <span className="font-[500]">{countdown} Seconds</span>
                </p>
            </motion.div>
        </div>
    );
};

export default SuccessPage;
