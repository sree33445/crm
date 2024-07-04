'use client'

import { Input } from '@nextui-org/input'
import React, { useState } from 'react'
import {Radio, RadioGroup, Select,SelectItem} from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import Link from 'next/link'


export default function Signup(){

  const [gender,setGender] = useState("male")

 return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400">
      {/* <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full"> */}
      <div className="mb-4">
        <form action="submit" className='w-full'>
        <h1 className="text-2xl font-bold mb-4 color-success text-center">SignUp Page</h1>
          <Input isRequired type="text" label='First Name' placeholder='Enter your first name' />
          <br />
          <Input isRequired type="text" label='Last Name' placeholder='Enter your last name' />
           <br />
           <RadioGroup label='Gender:' orientation='horizontal' value={gender} onChange={(e)=>setGender(e.target.value)}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
           </RadioGroup>
           <br />
           <Select isRequired label='Nationality' placeholder='Select your country' className="max-w-xs">
               <SelectItem value='india'>India</SelectItem>
               <SelectItem value='usa'>USA</SelectItem>
               <SelectItem value='uk'>UK</SelectItem>
           </Select>
           <br />
           <br />
          <Input isRequired type="email" label='Email' placeholder='Enter your email' />
          <br />
          <Input isRequired type="password" label='Password' placeholder='Enter your password' />
          <br />
          <Button as={Link} color='primary' href='/admin'>Signup</Button>
        </form>
        </div>
        {/* </div> */}
    </div>
  )
}

 