import { model } from 'mongoose'
import { userSchema } from './User'
import { IUser } from '../interfaces/IUser'

export const User = model<IUser>('User', userSchema)
