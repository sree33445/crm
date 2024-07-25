

'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'

export default function Team() {
  const router = useRouter()

  const handleViewTeamAndRole = () => {
    router.push('/teammember')
  }

  const handleAddUser = () => {
    router.push('/addusers')
  }

  return (
    <div style={styles.container}>
      <Button style={styles.viewButton} onPress={handleViewTeamAndRole}>
        View Team and Role
      </Button>
      <Button style={styles.addButton} onPress={handleAddUser}>
        Add User
      </Button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
    backgroundColor: '#f0f0f0',
  },
  viewButton: {
    backgroundColor: '#0070f3',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '8px',
  },
  addButton: {
    backgroundColor: '#ff4081',
    color: 'white',
    fontFamily: 'Courier New, monospace',
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '8px',
  }
}
