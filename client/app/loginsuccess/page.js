import { Link} from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import tickmark from '../Asset/tick-mark.1024x890.png'

export default function page(){
  return (
    <div>
      <Image src={tickmark} height={25} width={25} className='green-image' />
      <h1>Successfully Logged In...!!!</h1>
<<<<<<< Updated upstream
      <Link href='/main' isBlock showAnchorIcon>Go to main page</Link>
=======
      <Link href='/admin' isBlock showAnchorIcon>Go to main page</Link>
>>>>>>> Stashed changes
      </div>
  )
}

