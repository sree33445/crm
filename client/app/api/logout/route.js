import { NextResponse } from "next/server";

export async function POST(request){
    return NextResponse.json({ status: "success", message: "Logged out successfully" });
}