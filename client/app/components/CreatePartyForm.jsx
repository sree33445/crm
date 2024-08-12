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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded">
      <h2 className="text-2xl mb-4">Create Party</h2>
      <div className="mb-4">
      <Input
          isRequired
          type="text"
          label="Name"
          name='name'
          placeholder="Enter your name"
          onChange={(e)=>setName(e.target.value)}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />
      </div>
      <div className="mb-4">
      <Select isRequired label="Type" placeholder='Select the type' name='type' onChange={(e)=>setType(e.target.value)} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
        {typeName.map((type) => (
    <SelectItem key={type} value={type}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </SelectItem>
  ))}
        </Select>
      </div>
      <div className="mb-4">
      <Select isRequired label="Role" placeholder='Select the role' name='role' onChange={(e)=>setRoles(e.target.value)} orientation="horizontal" className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl">
        {roleName.map((role) => (
    <SelectItem key={role} value={role}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </SelectItem>
  ))}
        </Select>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
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
  );
};
export default CreatePartyForm;