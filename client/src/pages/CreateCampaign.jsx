import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'

import { money } from '../assets';
import { CustomButton } from '../components';
import { FormField } from '../components';
import { checkIfImage } from '../utils'

const CreateCampaign = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    description: '',
    title: '',
    target: '',
    deadline: '',
    image: ''
  })

  const handleSubmit = () => {

  }

  return (
    <div className=' bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-[10px] p-4'>
      {isLoading && 'loading...'}
      <div className=' flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className=' font-epilogue font-bold text[18px] leading-[38px] text-white'>Start a campaign</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
        <div className='flex flex-wrap gap-[40px]'>
          <FormField 
          labelName='Your Name *'
          placeholder='John Doe'
          value={form.name}
          handleChange={()  =>  {}}
          />
          <FormField 
          labelName='Campaign Title *'
          placeholder='Write a title'
          value={form.title}
          handleChange={()  =>  {}}
          />

        </div>

      </form>
    </div>
  )
}

export default CreateCampaign