import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  title: string;
  bedrooms: number;
  parking: string;
  bathrooms: number;
  compound: string;
  type: "rental" | "purchase";
  description: string;
  price: number;
  location: string;
  owner?: mongoose.Schema.Types.ObjectId; // Make optional if you don't have User model
  updatedAt?: Date;
  createdAt?: Date;
}

const PropertySchema = new Schema<IProperty>(
  {
    title: { type: String, required: true },
    bedrooms: { type: Number, required: true, default: 1 },
    parking: { type: String, required: true },
    bathrooms: { type: Number, required: true, default: 1 },
    compound: { type: String, required: true },
    type: { type: String, enum: ["rental", "purchase"], required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Optional for now
  },
  { timestamps: true }
);

const PropertyModel =
  mongoose.models.Property ||
  mongoose.model<IProperty>("Property", PropertySchema);

export default PropertyModel;
