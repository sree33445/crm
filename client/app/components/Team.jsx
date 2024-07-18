// // 'use client'

// // import React from 'react'

// // export default function Team() {
// //     const roleTeams = {
// //         'Cash collector': ['Cash collector1', 'Cash collector2', 'Cash collector3'],
// //         'Counselor': ['Counselor1', 'Counselor2', 'Counselor3'],
// //         'Manager': ['Manager1', 'Manager2', 'Manager3']
// //     }

// //     return (
// //         <div className="min-h-screen bg-gray-100 p-8">
// //             <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Teams</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 {Object.keys(roleTeams).map((role) => (
// //                     <div key={role} className="bg-white p-6 rounded-lg shadow-md">
// //                         <h3 className="text-xl font-bold mb-2 text-indigo-700">{role}</h3>
// //                         <ul className="list-disc list-inside pl-4">
// //                             {roleTeams[role].map((team) => (
// //                                 <li key={team} className="text-gray-700">{team}</li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     )
// // }


// 'use client'

// import React from 'react'
// import { Button } from '@nextui-org/button'

// export default function Team() {
//     const roleTeams = {
//         'Cash collector': ['Cash collector1', 'Cash collector2', 'Cash collector3'],
//         'Counselor': ['Counselor1', 'Counselor2', 'Counselor3'],
//         'Manager': ['Manager1', 'Manager2', 'Manager3']
//     }

//     const handleClick = (teamName) => {
//         alert(`Team Members on ${teamName}:`);
        
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 p-8">
//          <h1 className="text-2xl font-bold mb-6 text-center">
//                 <span className="italic underline" style={{ color: '#3B82F6' }}>TEAMS</span>
//             </h1>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {Object.keys(roleTeams).map((role) => (
//                     <div key={role} className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl font-bold mb-2 text-indigo-700">{role}</h3>
//                         <ul className="list-disc list-inside pl-4">
//                             {roleTeams[role].map((team) => (
//                                 <li key={team} className="text-gray-700">
//                                     <Button
//                                         color="secondary"
//                                         className="mr-2 mb-2"
//                                         onClick={() => handleClick(team)}
//                                     >
//                                         {team}
//                                     </Button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//             <p className="text-center mt-8">
//                 <span className="text-red-500">Teamwork</span>{' '}
//                 <span className="text-blue-500">makes</span>{' '}
//                 <span className="text-green-500">the</span>{' '}
//                 <span className="text-yellow-500">dream</span>{' '}
//                 <span className="text-purple-500">work.</span>
//             </p>     
//                </div>
//     )
// }


'use client'

import React from 'react'
import { Button } from '@nextui-org/button'

export default function Team() {
    const roleTeams = {
        'Cash collector': ['Cash collector1', 'Cash collector2', 'Cash collector3'],
        'Counselor': ['Counselor1', 'Counselor2', 'Counselor3'],
        'Manager': ['Manager1', 'Manager2', 'Manager3']
    }

    const handleClick = (teamName) => {
        alert(`Team Members on ${teamName}:`);
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">TEAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Rendering teams for 'Cash collector' */}
                <div className="bg-blue-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-indigo-700">Cash collector</h3>
                    <ul className="list-disc list-inside pl-4">
                        {roleTeams['Cash collector'].map((team) => (
                            <li key={team} className="text-gray-700">
                                <Button
                                    color="secondary"
                                    className="mr-2 mb-2"
                                    onClick={() => handleClick(team)}
                                >
                                    {team}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Rendering teams for 'Counselor' */}
                <div className="bg-green-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-indigo-700">Counselor</h3>
                    <ul className="list-disc list-inside pl-4">
                        {roleTeams['Counselor'].map((team) => (
                            <li key={team} className="text-gray-700">
                                <Button
                                    color="secondary"
                                    className="mr-2 mb-2"
                                    onClick={() => handleClick(team)}
                                >
                                    {team}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                
                <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-indigo-700">Manager</h3>
                    <ul className="list-disc list-inside pl-4">
                        {roleTeams['Manager'].map((team) => (
                            <li key={team} className="text-gray-700">
                                <Button
                                    color="secondary"
                                    className="mr-2 mb-2"
                                    onClick={() => handleClick(team)}
                                >
                                    {team}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="text-center mt-8">
                <span className="text-red-500">TEAMWORK</span>{' '}
                <span className="text-blue-500">MAKES</span>{' '}
                <span className="text-green-500">THE</span>{' '}
                <span className="text-yellow-500">DREAM</span>{' '}
                <span className="text-purple-500">WORK.</span>
            </p>
        </div>
    )
}
