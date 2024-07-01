'use client';
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'

export default function Login(){
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <form action="submit">
          <Input isRequired type="text" label='Name' placeholder='Enter your name' />
          <br />
          <Input isRequired type="email" label='Email' placeholder='Enter your email' />
          <br />
          <Input isRequired type="password" label='Password' placeholder='Enter your password' />
          <br />
          <Button color='primary'>Login</Button>
        </form>
    </div>
  )
}

