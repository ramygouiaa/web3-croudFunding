import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';


//the navbar or navigation bar lays on top of the UI it has a search input an a connect button
const Navbar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState('dashboard')

  //this hook manages activating/desactivating the drawer otherwise
  // the sandwich that appears on medium screens
  const [toggleDrawer, setToggleDrawer] = useState(false)
  const address = '0xabcd...'
  return (
    <div className=' flex md:flex-row flex-row-reverse justify-between mb-[35px] gap-6'>
      <div className=' lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
        <input type="text" placeholder='Search for campaigns' className='flex w-full font-epilogue font-normal text-[14px]
         placeholder:text-[#4b5264] text-white bg-transparent outline-none' />
        <div className=' w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
          <img src={search} alt="search" className=' w-[15px] h-[15px] object-contain' />
        </div>
      </div>
      <div className=' sm:flex hidden flex-row justify-end gap-4'>
        <CustomButton
          btnType="button"
          title={address ? 
            'Create a Campaign' : 'Connect'}
        />

      </div>
    </div>
  )
}

export default Navbar