import { DataTypes, Model, ModelDefined } from 'sequelize'
import { UserAttributes } from '../types'
import { db } from '../db/connection'

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
      defaultValue: 'empty'
    }
  },
  {
    tableName: 'users',
    timestamps: true
  }
)
