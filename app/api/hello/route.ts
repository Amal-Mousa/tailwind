import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  // return new Response('Hello Next js')
  // const body = await request.json();
  // const [name, eamil, password] = body;

  return NextResponse.json('Hellooooooo theree ') ;
};

