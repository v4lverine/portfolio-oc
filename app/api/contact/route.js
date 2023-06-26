import { NextResponse } from "next/server";

export async function GET(req) {
  return new Response("Coucou");
}

export async function POST(req, res) {
  {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ prompt: body.prompt });
  }
}
