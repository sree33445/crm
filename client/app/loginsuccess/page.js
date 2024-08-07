'use client'
import { Link } from '@nextui-org/react'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../Asset/Animation - 1723048901549.json'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Lottie animationData={animationData} className='h-[200px] w-[200px]'  />
      <h1 className='mx-10'>Successfully Logged In...!!!</h1>
      <Link href='/' isBlock showAnchorIcon>Go to main page</Link>
    </div>
  )
}