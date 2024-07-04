// // 'use client';
// // import { Button } from '@nextui-org/button'
// // import { Input } from '@nextui-org/input'
// // import Link from 'next/link';
// // import React from 'react'

// // export default function Login(){

// //   const [value, setValue] = React.useState("");
// //   const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

// //   const isInvalid = React.useMemo(() => {
// //     if (value === "") return false;

// //     return validateEmail(value) ? false : true;
// //   }, [value]);

// //   return (
// //     <div className="flex items-center justify-center min-h-screen b">
// //       {/* <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full"> */}
// //         <div className="mb-4">
// //         <form action="submit" className='w-full'>
// //           <h1 className="text-2xl font-bold mb-4 color-success text-center">Login Page</h1>
// //           <Input isRequired type="text" label='Name' placeholder='Enter your name' />
// //           <br />
// //           <Input isRequired type="email" label='Email' placeholder='Enter your email' value={value}  isInvalid={isInvalid} color={isInvalid ? 'danger':'default'} errorMessage='Please enter a valid email' onValueChange={setValue} className='max-w-xs' />
// //           <br />
// //           <Input isRequired type="password" label='Password' placeholder='Enter your password' />
// //           <br />
// //           <Button as={Link} color='primary' href='/loginsuccess'>Login</Button>
// //         </form>
// //         </div>
// //         {/* </div> */}
// //     </div>
// //   )
// // }

// // 'use client';
// // import { Button } from '@nextui-org/button';
// // import { Input } from '@nextui-org/input';
// // import Link from 'next/link';
// // import React from 'react';

// // export default function Login() {
// //   const [value, setValue] = React.useState("");
// //   const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

// //   const isInvalid = React.useMemo(() => {
// //     if (value === "") return false;
// //     return validateEmail(value) ? false : true;
// //   }, [value]);

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
// //         <form action="submit" className="w-full">
// //           <h1 className="text-2xl font-bold mb-4 text-indigo-600 text-center">Login Page</h1>
// //           <Input
// //             isRequired
// //             type="text"
// //             label="Name"
// //             placeholder="Enter your name"
// //             className="mb-4 border border-gray-300 rounded-lg"
// //           />
// //           <Input
// //             isRequired
// //             type="email"
// //             label="Email"
// //             placeholder="Enter your email"
// //             value={value}
// //             isInvalid={isInvalid}
// //             color={isInvalid ? 'danger' : 'default'}
// //             errorMessage="Please enter a valid email"
// //             onValueChange={setValue}
// //             className="mb-4 border border-gray-300 rounded-lg"
// //           />
// //           <Input
// //             isRequired
// //             type="password"
// //             label="Password"
// //             placeholder="Enter your password"
// //             className="mb-4 border border-gray-300 rounded-lg"
// //           />
// //           <Button
// //             as={Link}
// //             color="primary"
// //             href="/loginsuccess"
// //             className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-blue-600"
// //           >
// //             Login
// //           </Button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';
// import { Button } from '@nextui-org/button';
// import { Input } from '@nextui-org/input';
// import Link from 'next/link';
// import React from 'react';

// export default function Login() {
//   const [value, setValue] = React.useState("");
//   const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

//   const isInvalid = React.useMemo(() => {
//     if (value === "") return false;
//     return validateEmail(value) ? false : true;
//   }, [value]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <form action="submit" className="w-full">
//           <h1 className="text-2xl font-bold mb-4 text-indigo-600 text-center">Login Page</h1>
//           <Input
//             isRequired
//             type="text"
//             label="Name"
//             placeholder="Enter your name"
//             className="mb-4 border border-gray-300 rounded-lg"
//           />
//           <Input
//             isRequired
//             type="email"
//             label="Email"
//             placeholder="Enter your email"
//             value={value}
//             isInvalid={isInvalid}
//             color={isInvalid ? 'danger' : 'default'}
//             errorMessage="Please enter a valid email"
//             onValueChange={setValue}
//             className="mb-4 border border-gray-300 rounded-lg"
//           />
//           <Input
//             isRequired
//             type="password"
//             label="Password"
//             placeholder="Enter your password"
//             className="mb-4 border border-gray-300 rounded-lg"
//           />
//           <div className="flex justify-between items-center mb-4">
//             <Button
//               as={Link}
//               color="primary"
//               href="/loginsuccess"
//               className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-blue-600"
//             >
//               Login
//             </Button>
//             <Link href="/forgotpassword" className="text-indigo-500 hover:underline">
//               Forgot Password?
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React from "react";

export default function Login() {
  const [value, setValue] = React.useState("");
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;
    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <form action="submit" className="w-full">
          <h1 className="text-2xl font-bold mb-4 text-indigo-600 text-center">
            Login Page
          </h1>
          <Input
            isRequired
            type="text"
            label="Name"
            placeholder="Enter your name"
            className="mb-4 border border-gray-300 rounded-lg"
          />
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={value}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage="Please enter a valid email"
            onValueChange={setValue}
            className="mb-4 border border-gray-300 rounded-lg"
          />
          <Input
            isRequired
            type="password"
            label="Password"
            placeholder="Enter your password"
            className="mb-4 border border-gray-300 rounded-lg"
          />
          <div className="flex justify-end mb-4">
            <Link
              href="/forgotpassword"
              className="text-indigo-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center items-center mb-4">
            <Button
              as={Link}
              color="primary"
              href="/loginsuccess"
              className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </Button>
          </div>

          <div className="text-center">
            <Link href="/signup" className="text-indigo-700 hover:underline">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
