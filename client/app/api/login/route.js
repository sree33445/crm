import { NextResponse } from "next/server";
import { usersDB } from "@/app/lib/db/page";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const db = await usersDB();
    const collection = db.collection('users');
    
    const user = await collection.findOne({ name, email, password });
    
    if (user) {
      return NextResponse.json({ status: "success" });
    } else {
      return NextResponse.json(
        { status: "failure", message: "Invalid credentials" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { status: "error", message: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}