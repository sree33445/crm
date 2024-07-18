
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
    'firstName': '',
    'lastName': '',
    'role': '',
    'gender': '',
    'nationality': '',
    'email': '',
    'password': ''
  })

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

  // const role = ['admin', 'superadmin', 'parties', 'organization']

  // if (role == 'superadmin') {
  //   return redirect('/superadmin')
  // }
  return (
    <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12 bg-gray-200">
      <form action="submit" onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Signup</h2>
        <Input
          isRequired
          type="text"
          label="First Name"
          name='firstName'
          placeholder="Enter your first name"
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />
        <Input
          isRequired
          type="text"
          label="Last Name"
          name='lastName'
          placeholder="Enter your last name"
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />
        <Select isRequired label="Role" placeholder='Select the role' name='role' onChange={handleInputChange} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
          <SelectItem value='admin'>Admin</SelectItem>
          <SelectItem value='superadmin'>Super Admin</SelectItem>
          <SelectItem value='parties'>Parties</SelectItem>
          <SelectItem value='organization'>Organization</SelectItem>
        </Select>
        <Select isRequired label="Gender" placeholder='Select your gender' name='gender' onChange={handleInputChange} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </Select>
        <Select
          isRequired
          label="Nationality"
          placeholder="Select your country"
          name='nationality'
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        >
          <SelectItem value="india">India</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="uk">UK</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
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
        <Button color="primary" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">Signup</Button>
      </form>
    </div>
  )
}

 