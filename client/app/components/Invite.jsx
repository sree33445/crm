'use client'

import React, { useState } from 'react'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { redirect } from 'next/navigation'

export default function Invite(){

    const [email,SetEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/invite-user',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,message})
            })
            if (response.ok) {
                SetEmail('')
                setMessage('')
                alert('Invitation sent successfully');
                return window.location.href='/'
            } else {
                alert('Failed to sent invitation')
                console.error('Failed to sent invitation')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-indigo-700'>Invite User</h1>

            <Input isRequired label='Email' type='email' value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder='Enter email' className='mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500' />
            <Textarea label='Message' type='text' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Enter message' className='mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500' />
            <Button type="submit" color='primary' className='w-full py-2 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-600 transition duration-200'>
                Invite User
            </Button>
        </form>
    </div>
  )
}

