import { DataTypes, ModelDefined } from 'sequelize'
import { UserAttributes } from '../types'
import { db } from '../db/connection'

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: DataTypes.STRING,
  avatar: DataTypes.STRING
})

export { User }
