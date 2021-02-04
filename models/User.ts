import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: String;
  email: String;
  password: String;
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<User>('User', UserSchema);
