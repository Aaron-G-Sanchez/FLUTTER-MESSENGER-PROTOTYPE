import { Types } from 'mongoose'

// TODO: Add Chats field
export interface IUser {
  username: string
  avatar: string
  friends?: Types.ObjectId[]
}
