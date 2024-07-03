import { model, Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
