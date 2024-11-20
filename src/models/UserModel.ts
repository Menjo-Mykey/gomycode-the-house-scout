// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  savedProperties: mongoose.Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
