import { connectToDatabase } from "@/app/lib/db";
import PropertyModel from "@/models/PropertyModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const params = new URL(req.url).searchParams;
    const bedrooms = params.get("bedrooms");

    const filter = bedrooms ? { bedrooms: parseInt(bedrooms) } : {};
    const properties = await PropertyModel.find(filter).limit(1);

    return NextResponse.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json({ error:"error message" }, { status: 500 });
  }
}
export async function POST(req:NextRequest) {
  try {
      const body = await req.json();
      await connectToDatabase();
              const savedProperties = await PropertyModel.insertMany(Array.isArray(body)? body:[body])

    // Return the houses as JSON
    return new Response(JSON.stringify(savedProperties), { status: 200 });
  } catch (error: any) {
    // Return an error response if something goes wrong
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
