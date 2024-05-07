import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Logo from '../assets/logo'

const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center rounded-[65.28px] border-[1px] px-[16.97px] py-[20.89px]'>
            <div>
                <Logo />
            </div>
            <div className='flex flex-row'>
                <SecondaryButton
                    text="Onboard Talent"
                    width="189.56px"
                    height="77.22px"
                />
                <PrimaryButton
                    text="Get Projects"
                    width="223.39px"
                    height="77.22px"
                />
            </div>
        </div>
    )
}

export default Header