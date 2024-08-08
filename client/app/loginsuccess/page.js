'use client'
import { Link } from '@nextui-org/react'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import animationData from '../asset/Animation - 1723048901549.json'

export default function Page() {

  useEffect(()=>{
    const timer = setTimeout(()=>{
      window.location.href = '/'
    },3000)
    return ()=> clearTimeout(timer)
  },[])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Lottie animationData={animationData} className='h-[200px] w-[200px]'  />
      <h1 className='mx-10'>Successfully Logged In...!!!</h1>
    </div>
  )
}