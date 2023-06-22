// export async function POST(req, res) {
//   if (req.method === "POST") {
//     res.status(200).json(req.body);
//   } else {
//     res.status(500).json("message: Erreur réseau");
//   }
//   console.log(req.body);
// }

// export default function handler(req, res) {
//   if (req.method !== "POST") {
//     res.status(405).send({ message: "Only POST requests allowed" });
//     return;
//   }
// }
import { NextResponse } from "next/server";

export async function GET(req) {
  return new Response("Coucou");
}

export async function POST(req, res) {
  {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ prompt: body.prompt }); //what is prompt ?
  }
}
