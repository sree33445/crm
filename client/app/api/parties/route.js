// // app/api/parties/route.js
// import { NextResponse } from 'next/server';
// import { usersDB } from '@/lib/db/page'; // Adjust the import path if needed

// export async function POST(request) {
//   try {
//     const { name, type, roles } = await request.json();
//     const newParty = await usersDB({ name, type, roles });
//     return NextResponse.json(newParty, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Error creating party' }, { status: 500 });
//   }
// }

import { usersDB } from "@/app/lib/db/page";
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const {name,type,role} = await req.json();
    const db = await usersDB();
    const collection = db.collection('parties');
    const result = await collection.insertOne({name,type,role});
    return NextResponse.json(
      { 
        message: 'Party created successfully', 
        userId: result.insertedId.toString(), 
        role: {name,type,role}.role 
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating party:', error);
    return NextResponse.json(
      { message: 'Error creating party', error: error.message }, 
      { status: 500 }
    );
  }
}