import { HydratedDocument } from 'mongoose'
import { serverConnect, serverDisconnect } from '../src/config/testingConfig'
import { IUser } from '../src/interfaces/IUser'
import { User } from '../src/models'

beforeAll(async () => {
  await serverConnect()
})

afterAll(async () => {
  await serverDisconnect()
})

describe('User model', () => {
  test('should create a new user', async () => {
    const testUserData: IUser = {
      username: 'test user',
      avatar: ''
    }

    const newUser: HydratedDocument<IUser> = await User.create(testUserData)
    expect(newUser).toMatchObject(testUserData)
  })
})
