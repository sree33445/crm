'use client';
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import Link from 'next/link';
import React from 'react'

export default function Login(){

  const [value, setValue] = React.useState("");
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12">
        <form action="submit">
          <Input isRequired type="text" label='Name' placeholder='Enter your name' />
          <br />
          <Input isRequired type="email" label='Email' placeholder='Enter your email' value={value}  isInvalid={isInvalid} color={isInvalid ? 'danger':'default'} errorMessage='Please enter a valid email' onValueChange={setValue} className='max-w-xs' />
          <br />
          <Input isRequired type="password" label='Password' placeholder='Enter your password' />
          <br />
          <Button as={Link} color='primary' href='/loginsuccess'>Login</Button>
        </form>
    </div>
  )
}

