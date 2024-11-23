import { connectToDatabase } from "@/app/lib/db";
import PropertyModel from "@/models/PropertyModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const params = new URL(req.url).searchParams;
    const bedrooms = params.get("bedrooms");

    const filter = bedrooms ? { bedrooms: parseInt(bedrooms) } : {};
    const properties = await PropertyModel.find(filter);

    return NextResponse.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json({ error:"error message" }, { status: 500 });
  }
}
