'use client'

import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Select, SelectItem } from '@nextui-org/react'
import {Button} from '@nextui-org/button'
import Link from 'next/link'
import styles from '../admin/admin.module.css'

export default function Admin(){
    const [name,setName] = useState('')
    const [role,setRole] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = async(e) => {
         e.preventDefault();

         const res = await fetch('/api/users',{
             method:'POST',
             headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, role }),
         })
         if (res.ok) {
            const data = await res.json()
            setMessage(`User ${data.name} with role ${data.role} created successfully`);
         } else {
            const error = await res.json();
             setMessage(`Error: ${error.message}`);
         }
    }
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input isRequired label='Name' type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)} className='mb-10' />
            <br />
            <Select isRequired value={role} label='Role' onChange={(e)=>setRole(e.target.value)} placeholder='Choose the role' className=" mb-10">
                <SelectItem>Cash collector</SelectItem>
                <SelectItem>Counselor</SelectItem>
                <SelectItem>Manager</SelectItem>
            </Select>
            <br />
            <br />
            <Button  color='primary'>Create User</Button>
        </form>
        {message && <p>{message}</p>}
    </div>
  )
}
