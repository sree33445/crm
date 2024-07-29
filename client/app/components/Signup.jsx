
'use client'

import { Input } from '@nextui-org/input'
import React, { useState } from 'react'
import { RadioGroup, Radio, Select, SelectItem } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
// import { useRouter } from 'next/router'


export default function Signup() {

  // const router = useRouter()
  const [formData,setFormData] = useState({
    'name': '',
    'role': '',
    'gender': '',
    'nationality': '',
    'email': '',
    'password': ''
  })

  const roleName = ['admin', 'superadmin', 'parties', 'organization']

  const genderName = ['male', 'female']

  const nationName = ['india', 'canada', 'uk', 'australia']

  const handleInputChange = (e) =>{
    const {name,value} = e.target
    setFormData(prevData =>({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/signup',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if(response.ok){
        const data = await response.json()
        console.log('Signup successfull');

        if(formData.role === 'superadmin'){
          window.location.href='/superadmin'
        } else {
          window.location.href='/'
        }
      } else {
        console.error('Signup failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }


  // if (role == 'superadmin') {
  //   return redirect('/superadmin')
  // }
  return (
    <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12 bg-gray-200">
      <form  onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Signup</h2>
        <Input
          isRequired
          type="text"
          label="Name"
          name='name'
          placeholder="Enter your name"
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />
        
        <Select isRequired label="Role" placeholder='Select the role' name='role' onChange={handleInputChange} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
        {roleName.map((role) => (
    <SelectItem key={role} value={role}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </SelectItem>
  ))}
        </Select>
        <Select isRequired label="Gender" placeholder='Select your gender' name='gender' onChange={handleInputChange} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
          {genderName.map((gender)=>(
            <SelectItem  key={gender} value={gender}> {gender.charAt(0).toUpperCase() + gender.slice(1)}</SelectItem>
          ))}
        </Select>
        <Select
          isRequired
          label="Nationality"
          placeholder="Select your country"
          name='nationality'
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        >
         {nationName.map((nationality)=>(
          <SelectItem key={nationality} value={nationality}>{nationality.charAt(0).toUpperCase() + nationality.slice(1)}</SelectItem>
         ))}
        </Select>
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="Enter your email"
          name='email'
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />
        <Input
          isRequired
          type="password"
          label="Password"
          placeholder="Enter your password"
          name='password'
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />
        <Button type='submit' color="primary" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">Signup</Button>
      </form>
    </div>
  )
}

 