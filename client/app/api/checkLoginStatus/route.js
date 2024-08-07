import { NextResponse } from "next/server";

export async function GET(request){
    const isLoggedIn = true;
    return NextResponse.json({isLoggedIn})
}