import { Schema } from 'mongoose'
import { IUser } from '../interfaces/IUser'

export const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  avatar: { type: String, default: null },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})
