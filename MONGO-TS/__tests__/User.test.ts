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
  const testUserOne: IUser = {
    username: 'testUserOne'
  }

  const testUserTwo: IUser = {
    username: 'testUserTwo'
  }

  test('should create a new user', async () => {
    const [userOne, userTwo]: HydratedDocument<IUser>[] = await User.create([
      testUserOne,
      testUserTwo
    ])
    expect(userOne).toBeInstanceOf(User)
    expect(userOne).toMatchObject(testUserOne)
    expect(userTwo).toBeInstanceOf(User)
    expect(userTwo).toMatchObject(testUserTwo)
  })

  test('should allow User to add friends', async () => {
    const userOne: HydratedDocument<IUser> | null = await User.findOne({
      username: testUserOne.username
    })

    const userTwo: HydratedDocument<IUser> | null = await User.findOne({
      username: testUserTwo.username
    })

    userOne!.friends!.push(userTwo!._id)
    userTwo!.friends!.push(userOne!._id)
    await userOne!.save()
    await userTwo!.save()

    expect(userOne!.friends).toContain(userTwo!._id)
    expect(userTwo!.friends).toContain(userOne!._id)
  })

  test('friends should persist in the database', async () => {
    const userOneWithFriend: HydratedDocument<IUser> | null =
      await User.findOne({
        username: testUserOne.username
      }).populate('friends')

    expect(userOneWithFriend!.friends).toEqual(
      expect.arrayContaining([expect.objectContaining(testUserTwo)])
    )
  })
})
