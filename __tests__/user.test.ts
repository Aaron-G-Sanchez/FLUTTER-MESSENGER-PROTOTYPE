import { db } from '../src/db/connection'
import { describe, test, expect, beforeAll } from '@jest/globals'
import { User } from '../src/models'
import { UserAttributes } from '../src/types'

beforeAll(async () => {
  await db.sync({ force: true })
})

describe('User', () => {
  test('should be able to create a user', async () => {
    const userObj = {
      username: 'Chravis',
      avatar: 'empty',
      friends: []
    }

    const newUser = await User.create(userObj)

    expect(newUser).toBeInstanceOf(User)
  })
})
