import { connectToDatabase } from "@/app/lib/db";
import UserModel from "@/models/UserModel";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all houses from the collection
    const users = await UserModel.find();

    // Return the houses as JSON
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    // Return an error response if something goes wrong
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(req:NextRequest) {
    try {
        const body = await req.json();
        await connectToDatabase();
                const savedUsers = await UserModel.insertMany(Array.isArray(body)? body:[body])

      // Return the houses as JSON
      return new Response(JSON.stringify(savedUsers), { status: 200 });
    } catch (error: any) {
      // Return an error response if something goes wrong
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }
