import { usersDB } from "@/app/lib/db/page";

import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const db = await usersDB()
    const collection = db.collection('users')
    
    const result = await collection.insertOne(body)
    
    return NextResponse.json({ message: 'User created successfully', userId: result.insertedId, role: body.role }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 })
  }
}