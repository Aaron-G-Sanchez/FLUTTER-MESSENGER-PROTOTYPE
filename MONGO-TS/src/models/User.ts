import { Schema } from 'mongoose'
import { IUser } from '../interfaces/IUser'

// TODO: User should have sub documents:
// - Friends
// - Chats
export const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    avatar: { type: String, default: null },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    timestamps: true
  }
)
