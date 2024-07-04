// 'use client'

// import { Input } from '@nextui-org/input'
// import React from 'react'
// import { RadioGroup, Radio,Select,SelectItem} from '@nextui-org/react'
// import { Button } from '@nextui-org/button'


// export default function Signup(){
//   return (
//     <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12">
//         <form action="submit">
//           <Input isRequired type="text" label='First Name' placeholder='Enter your first name' />
//           <br />
//           <Input isRequired type="text" label='Last Name' placeholder='Enter your last name' />
//            <br />
//            <RadioGroup label='Gender:' orientation='horizontal'>
//                 <Radio value='male'>Male</Radio>
//                 <Radio value='female'>Female</Radio>
//            </RadioGroup>
//            <br />
//            <Select isRequired label='Nationality' placeholder='Select your country' className="max-w-xs">

//            </Select>
//            <br />
//           <Input isRequired type="email" label='Email' placeholder='Enter your email' />
//           <br />
//           <Input isRequired type="password" label='Password' placeholder='Enter your password' />
//           <br />
//           <Button color='primary'>Signup</Button>
//         </form>
//     </div>
//   )
// }

'use client'

import { Input } from '@nextui-org/input'
import React from 'react'
import { RadioGroup, Radio, Select, SelectItem } from '@nextui-org/react'
import { Button } from '@nextui-org/button'

export default function Signup() {
  return (
    <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12 bg-gray-100">
      <form action="submit" className="w-full max-w-md p-8 bg-blue-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Signup</h2>
        <Input
          isRequired
          type="text"
          label="First Name"
          placeholder="Enter your first name"
          className="mb-4 border border-blue-400 focus:border-indigo-600"
        />
        <Input
          isRequired
          type="text"
          label="Last Name"
          placeholder="Enter your last name"
          className="mb-4 border border-blue-400 focus:border-indigo-600"
        />
        <RadioGroup label="Gender:" orientation="horizontal" className="mb-4">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
        <Select
          isRequired
          label="Nationality"
          placeholder="Select your country"
          className="mb-4 border border-blue-400 focus:border-indigo-600"
        >
          <SelectItem value="usa">India</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="uk">UK</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
        </Select>
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="mb-4 border border-blue-400 focus:border-indigo-600"
        />
        <Input
          isRequired
          type="password"
          label="Password"
          placeholder="Enter your password"
          className="mb-4 border border-blue-400 focus:border-indigo-600"
        />
        <Button color="primary" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">Signup</Button>
      </form>
    </div>
  )
}

// 'use client'

// import { Input } from '@nextui-org/input'
// import React from 'react'
// import { RadioGroup, Radio, Select, SelectItem } from '@nextui-org/react'
// import { Button } from '@nextui-org/button'

// export default function Signup() {
//   return (
//     <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12 bg-gray-100">
//       <form action="submit" className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Signup</h2>
//         <Input
//           isRequired
//           type="text"
//           label="First Name"
//           placeholder="Enter your first name"
//           className="mb-4 border border-blue-400 focus:border-blue-600"
//         />
//         <Input
//           isRequired
//           type="text"
//           label="Last Name"
//           placeholder="Enter your last name"
//           className="mb-4 border border-blue-400 focus:border-blue-600"
//         />
//         <RadioGroup label="Gender:" orientation="horizontal" className="mb-4">
//           <Radio value="male">Male</Radio>
//           <Radio value="female">Female</Radio>
//         </RadioGroup>
//         <Select
//           isRequired
//           label="Nationality"
//           placeholder="Select your country"
//           className="mb-4 border border-blue-400 focus:border-blue-600"
//         >
//           <SelectItem value="usa">USA</SelectItem>
//           <SelectItem value="canada">Canada</SelectItem>
//           <SelectItem value="uk">UK</SelectItem>
//           <SelectItem value="australia">Australia</SelectItem>
//         </Select>
//         <Input
//           isRequired
//           type="email"
//           label="Email"
//           placeholder="Enter your email"
//           className="mb-4 border border-blue-400 focus:border-blue-600"
//         />
//         <Input
//           isRequired
//           type="password"
//           label="Password"
//           placeholder="Enter your password"
//           className="mb-4 border border-blue-400 focus:border-blue-600"
//         />
//         <Button color="primary" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Signup</Button>
//       </form>
//     </div>
//   )
// }