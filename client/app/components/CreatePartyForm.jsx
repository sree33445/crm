"use client";

import { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/select';
import { Input } from '@nextui-org/input';


const CreatePartyForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [role, setRoles] = useState('');
  const [message, setMessage] = useState('');

  const typeName = ['school','training','software company']
  const roleName = ['manager','counsellor','cashier']

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/parties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          type,
          role: role.split(',').map(role => role.trim()),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Party created successfully!');
      } else {
        setMessage('Error creating party: ' + (await response.text()));
      }
    } catch (error) {
      setMessage('Error creating party: ' + error.message);
    }
  };

  return (
    <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 p-12 bg-gray-200">
    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Create Party</h2>
      <Input
          isRequired
          type="text"
          label="Name"
          name='name'
          placeholder="Enter your name"
          onChange={(e)=>setName(e.target.value)}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />
      <Select isRequired label="Type" placeholder='Select the type' name='type' onChange={(e)=>setType(e.target.value)} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
        {typeName.map((type) => (
    <SelectItem key={type} value={type}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </SelectItem>
  ))}
        </Select>
      <Select isRequired label="Role" placeholder='Select the role' name='role' onChange={(e)=>setRoles(e.target.value)} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
        {roleName.map((role) => (
    <SelectItem key={role} value={role}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </SelectItem>
  ))}
        </Select>
      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
        Create Party
      </button>
      {message && (
      <p
      className={`mt-4 p-2 rounded ${
        message.startsWith('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
      }`}
    >
      {message}
    </p>
    
      )}
    </form>
    </div>

  );
};
export default CreatePartyForm;