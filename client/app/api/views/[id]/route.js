import { NextResponse } from 'next/server';
import { getViewById, updateView } from '@/lib/db';

export async function GET(request, { params }) {
  const view = await getViewById(params.id);
  return NextResponse.json(view);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updatedView = await updateView(params.id, data);
  return NextResponse.json(updatedView);
}