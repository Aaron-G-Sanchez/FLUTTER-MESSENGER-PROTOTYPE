import { DataTypes, Model, ModelDefined } from 'sequelize'
import { UserAttributes } from '../types'
import { db } from '../db/connection'

// TODO: Figure out how to have the User have a friends property that is an array of UserAttributes
export const User: ModelDefined<UserAttributes, UserAttributes> = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  },
  {
    tableName: 'users',
    timestamps: true
  }
)
