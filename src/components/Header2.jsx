import React from 'react'
import Logo from '../assets/logo'
import { Link } from 'react-router-dom'
import CrossButton from './CrossButton'

const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center px-[16.97px] py-[20.89px] mx-[24px] mt-[24px]'>
            <div>
                <Link to="/"><Logo /></Link>
            </div>
            <div className='flex flex-row gap-4'>
                <Link to="/">
                    <CrossButton />
                </Link>
            </div>
        </div>
    )
}

export default Header