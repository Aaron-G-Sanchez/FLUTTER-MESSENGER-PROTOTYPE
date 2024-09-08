import { db } from '../src/db/connection'
import { describe, test, expect, beforeAll } from '@jest/globals'
import { User } from '../src/models'
import { UserAttributes } from '../src/types'

beforeAll(async () => {
  await db.sync({ force: true })
})

describe('User', () => {
  test('should be able to create a user', async () => {
    const userObj: UserAttributes = {
      username: 'Chravis',
      avatar: 'empty'
    }

    const newUser = await User.create(userObj)

    expect(newUser).toBeInstanceOf(User)
    expect(newUser).toHaveProperty('username', userObj.username)
  })
})
