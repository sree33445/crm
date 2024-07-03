'use client'

import { Input } from '@nextui-org/input'
import React from 'react'
import { RadioGroup, Radio,Select,SelectItem} from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import Link from 'next/link'


export default function Signup(){
  return (
    <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12">
        <form action="submit">
          <Input isRequired type="text" label='First Name' placeholder='Enter your first name' />
          <br />
          <Input isRequired type="text" label='Last Name' placeholder='Enter your last name' />
           <br />
           <RadioGroup label='Gender:' orientation='horizontal'>
                <Radio value='male'>Male</Radio>
                <Radio value='female'>Female</Radio>
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
  )
}

 