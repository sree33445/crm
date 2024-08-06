import { NextResponse } from 'next/server';
   import { usersDB } from '@/app/lib/db/page'; // Adjust this import based on your project structure

   export async function POST(req) {
     try {
       const body = await req.json();
       const db = await usersDB();
       const collection = db.collection('adminteam');
       const result = await collection.insertOne(body);
       return NextResponse.json(
         { 
           message: 'User created successfully', 
           userId: result.insertedId.toString(), 
           role: body.role,
           name: body.name
         }, 
         { status: 201 }
       );
     } catch (error) {
       console.error('Detailed error in POST /api/signup/adminteam:', {
         name: error.name,
         message: error.message,
         stack: error.stack,
       });
       return NextResponse.json(
         { message: 'Error creating user', error: error.message }, 
         { status: 500 }
       );
     }
   }

   export async function GET() {
     try {
       const db = await usersDB();
       const collection = db.collection('adminteam');
       const users = await collection.find({}).toArray();
       return NextResponse.json(users);
     } catch (error) {
       console.error('Detailed error in GET /api/signup/adminteam:', {
         name: error.name,
         message: error.message,
         stack: error.stack,
       });
       return NextResponse.json(
         { message: 'Error fetching users', error: error.message }, 
         { status: 500 }
       );
     }
   }