
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Select, SelectItem, Tabs, Tab, Input } from '@nextui-org/react';
// import { Button } from '@nextui-org/button';

// export default function AddUsers() {
//     const [selectedTab, setSelectedTab] = useState('select');
//     const [name, setName] = useState('');
//     const [role, setRole] = useState('');
//     const [team, setTeam] = useState('');
//     const [message, setMessage] = useState('');
//     const [teamOptions, setTeamOptions] = useState([]);
//     const [nameList, setNameList] = useState([]);

//     const roleTeams = {
//         'Cash collector': ['Cash collector1', 'Cash collector2', 'Cash collector3'],
//         'Counselor': ['Counselor1', 'Counselor2', 'Counselor3'],
//         'Manager': ['Manager1', 'Manager2', 'Manager3']
//     };

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch('/api/signup/route');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const names = await response.json();
//                 if (names.length === 0) {
//                     setMessage('No names available');
//                 }
//                 setNameList(names);
//             } catch (error) {
//                 console.error('Error fetching names:', error);
//                 setMessage('Error fetching names from database');
//             }
//         }
    
//         fetchData();
//     }, []);

//     useEffect(() => {
//         if (role) {
//             setTeamOptions(roleTeams[role]);
//             setTeam('');
//         }
//     }, [role]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!name) {
//             setMessage('Please enter a name');
//             return;
//         }

//         if (!role) {
//             setMessage('Please select a role');
//             return;
//         }

//         try {
//             const res = await fetch('/api/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, role, team }),
//             });

//             if (res.ok) {
//                 const data = await res.json();
//                 setMessage(`User ${data.name} with role ${data.role} ${data.isNew ? 'created' : 'updated'} successfully`);
//                 await fetchData();
//                 if (selectedTab === 'create') {
//                     setName('');
//                     setRole('');
//                     setTeam('');
//                 }
//             } else {
//                 const error = await res.json();
//                 setMessage(`Error: ${error.message}`);
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             setMessage('Error submitting form');
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Manage User</h2>

//                 <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
//                     <Tab key="select" title="Select User">
//                         <form onSubmit={handleSubmit} className="mt-4">
//                             <Select
//                                 isRequired
//                                 label="Select a name"
//                                 placeholder="Choose a name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="mb-4"
//                             >
//                                 {nameList.length > 0 ? (
//                                     nameList.map((userName) => (
//                                         <SelectItem key={userName} value={userName}>
//                                             {userName}
//                                         </SelectItem>
//                                     ))
//                                 ) : (
//                                     <SelectItem disabled>No names available</SelectItem>
//                                 )}
//                             </Select>

//                             <Select
//                                 isRequired
//                                 value={role}
//                                 label='Role'
//                                 onChange={(e) => setRole(e.target.value)}
//                                 placeholder='Choose the role'
//                                 className="mb-4"
//                             >
//                                 {Object.keys(roleTeams).map((roleOption) => (
//                                     <SelectItem key={roleOption} value={roleOption}>
//                                         {roleOption}
//                                     </SelectItem>
//                                 ))}
//                             </Select>

//                             {role && (
//                                 <Select
//                                     isRequired
//                                     value={team}
//                                     label='Team'
//                                     onChange={(e) => setTeam(e.target.value)}
//                                     placeholder='Choose the team'
//                                     className="mb-4"
//                                 >
//                                     {teamOptions.map((teamOption) => (
//                                         <SelectItem key={teamOption} value={teamOption}>
//                                             {teamOption}
//                                         </SelectItem>
//                                     ))}
//                                 </Select>
//                             )}

//                             <Button type="submit" color='primary' className='w-full py-2 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-600 transition duration-200'>
//                                 Update User
//                             </Button>
//                         </form>
//                     </Tab>
//                     <Tab key="create" title="Create User">
//                         <form onSubmit={handleSubmit} className="mt-4">
//                             <Input
//                                 isRequired
//                                 label='Name'
//                                 type='text'
//                                 placeholder='Enter name'
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className='mb-4'
//                             />

//                             <Select
//                                 isRequired
//                                 value={role}
//                                 label='Role'
//                                 onChange={(e) => setRole(e.target.value)}
//                                 placeholder='Choose the role'
//                                 className="mb-4"
//                             >
//                                 {Object.keys(roleTeams).map((roleOption) => (
//                                     <SelectItem key={roleOption} value={roleOption}>
//                                         {roleOption}
//                                     </SelectItem>
//                                 ))}
//                             </Select>

//                             {role && (
//                                 <Select
//                                     isRequired
//                                     value={team}
//                                     label='Team'
//                                     onChange={(e) => setTeam(e.target.value)}
//                                     placeholder='Choose the team'
//                                     className="mb-4"
//                                 >
//                                     {teamOptions.map((teamOption) => (
//                                         <SelectItem key={teamOption} value={teamOption}>
//                                             {teamOption}
//                                         </SelectItem>
//                                     ))}
//                                 </Select>
//                             )}

//                             <Button type="submit" color='primary' className='w-full py-2 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-600 transition duration-200'>
//                                 Create User
//                             </Button>
//                         </form>
//                     </Tab>
//                 </Tabs>
//             </div>
//             {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
//         </div>
//     );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Tabs, Tab, Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

export default function AddUsers() {
    const [selectedTab, setSelectedTab] = useState('select');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [team, setTeam] = useState('');
    const [message, setMessage] = useState('');
    const [teamOptions, setTeamOptions] = useState([]);
    const [nameList, setNameList] = useState([]);

    const roleTeams = {
        'Cash collector': ['Cash collector1', 'Cash collector2', 'Cash collector3'],
        'Counselor': ['Counselor1', 'Counselor2', 'Counselor3'],
        'Manager': ['Manager1', 'Manager2', 'Manager3']
    };

    const fetchData = async () => {
        try {
            const response = await fetch('/api/signup/adminteam');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const names = await response.json();
            if (names.length === 0) {
                setMessage('No names available');
            }
            setNameList(names);
        } catch (error) {
            console.error('Error fetching names:', error);
            setMessage('Error fetching names from database');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (role) {
            setTeamOptions(roleTeams[role]);
            setTeam('');
        }
    }, [role]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) {
            setMessage('Please enter a name');
            return;
        }

        if (!role) {
            setMessage('Please select a role');
            return;
        }

        try {
            const res = await fetch('/api/adminadduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, role, team }),
            });

            if (res.ok) {
                const data = await res.json();
                setMessage(`User ${data.name} with role ${data.role} ${data.isNew ? 'created' : 'updated'} successfully`);
                await fetchData(); // Refresh the name list after successful operation
                if (selectedTab === 'create') {
                    setName('');
                    setRole('');
                    setTeam('');
                }
            } else {
                const error = await res.json();
                setMessage(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Error submitting form');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Manage User</h2>

                <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
                    <Tab key="select" title="Select User">
                        <form onSubmit={handleSubmit} className="mt-4">
                            <Select
                                isRequired
                                label="Select a name"
                                placeholder="Choose a name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mb-4"
                            >
                                {nameList.length > 0 ? (
                                    nameList.map((userName) => (
                                        <SelectItem key={userName} value={userName}>
                                            {userName}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <SelectItem disabled>No names available</SelectItem>
                                )}
                            </Select>

                            <Select
                                isRequired
                                value={role}
                                label='Role'
                                onChange={(e) => setRole(e.target.value)}
                                placeholder='Choose the role'
                                className="mb-4"
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
                                    className="mb-4"
                                >
                                    {teamOptions.map((teamOption) => (
                                        <SelectItem key={teamOption} value={teamOption}>
                                            {teamOption}
                                        </SelectItem>
                                    ))}
                                </Select>
                            )}

                            <Button type="submit" color='primary' className='w-full py-2 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-600 transition duration-200'>
                                Update User
                            </Button>
                        </form>
                    </Tab>
                    <Tab key="create" title="Create User">
                        <form onSubmit={handleSubmit} className="mt-4">
                            <Input
                                isRequired
                                label='Name'
                                type='text'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='mb-4'
                            />

                            <Select
                                isRequired
                                value={role}
                                label='Role'
                                onChange={(e) => setRole(e.target.value)}
                                placeholder='Choose the role'
                                className="mb-4"
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
                                    className="mb-4"
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
                    </Tab>
                </Tabs>
            </div>
            {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </div>
    );
}
