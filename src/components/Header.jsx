import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Logo from '../assets/logo'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center rounded-[65.28px] border-[1px] px-[16.97px] py-[20.89px] mx-[24px] mt-[24px]'>
            <div>
                <Link to="/"><Logo /></Link>
            </div>
            <div className='flex flex-row gap-4'>
                <Link to="/">
                    <SecondaryButton
                        text="Get Projects"
                        width="189.56px"
                        height="77.22px"
                    />
                </Link>

                <PrimaryButton
                    text="Onboard Talent"
                    width="223.39px"
                    height="77.22px"
                />
            </div>
        </div>
    )
}

export default Header