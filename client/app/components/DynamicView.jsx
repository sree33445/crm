'use client'

import { Button } from '@nextui-org/button'
import React, { useState } from 'react'

export default function DynamicView({viewId}){

    const [view,setView] = useState(null)

  return (
    <div>
        <h1>{view.name}</h1>
        <form>{view.controls.map(renderControl)}
            <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

