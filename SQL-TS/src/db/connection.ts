import { Sequelize, DataTypes } from 'sequelize'
import path from 'path'

export const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite'),
  logging: false
})
