'use client'

import React, { useState, useEffect } from 'react'
import { Input } from '@nextui-org/input'
import { Select, SelectItem } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Admin() {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')
    const [message, setMessage] = useState('')
    const [teamOptions, setTeamOptions] = useState([])

    const roleTeams = {
        'Cash collector': ['Cash collector1', 'Cash collector2', 'Cash collector3'],
        'Counselor': ['Counselor1', 'Counselor2', 'Counselor3'],
        'Manager': ['Manager1', 'Manager2', 'Manager3']
    }

    useEffect(() => {
        if (role) {
            setTeamOptions(roleTeams[role])
            setTeam('')
        }
    }, [role])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, role, team }),
        })
        if (res.ok) {
            const data = await res.json()
            setMessage(`User ${data.name} with role ${data.role} created successfully`)
        } else {
            const error = await res.json()
            setMessage(`Error: ${error.message}`)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Create User</h2>
                <Input
                    isRequired
                    label='Name'
                    type='text'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500'
                />

                <Select
                    isRequired
                    value={role}
                    label='Role'
                    onChange={(e) => setRole(e.target.value)}
                    placeholder='Choose the role'
                    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                >
                    {Object.keys(roleTeams).map((roleOption) => (
                        <SelectItem key={roleOption} value={roleOption}>
                            {roleOption}
                        </SelectItem>
                    ))}
                </Select>

                {role && (
                    <Select
                        isRequired
                        value={team}
                        label='Team'
                        onChange={(e) => setTeam(e.target.value)}
                        placeholder='Choose the team'
                        className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                    >
                        {teamOptions.map((teamOption) => (
                            <SelectItem key={teamOption} value={teamOption}>
                                {teamOption}
                            </SelectItem>
                        ))}
                    </Select>
                )}

                <Button type="submit" color='primary' className='w-full py-2 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-600 transition duration-200'>
                    Create User
                </Button>
            </form>
            {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </div>
    )
}


