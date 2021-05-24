import Sequelize from 'sequelize'
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } from '../config'

import ContainerDeposits from './ContainerDeposits'
import DutyFree from './DutyFree'
import Farmers from './Farmers'
import J10 from './J10'
import Location from './Location'
import NonVQA from './NonVQA'
import VQA from './VQA'
import VQAO from './VQAO'
import WRS from './WRS'
import MissingReports from './MissingReports'

// setup sequalize
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false
})

export const models = [
  NonVQA,
  VQAO,
  J10,
  WRS,
  Farmers,
  Location,
  DutyFree,
  ContainerDeposits,
  VQA,
  MissingReports
].reduce((acc, model) => ({ ...acc, [model.name]: model(sequelize, Sequelize.DataTypes) }), {})

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export const setup = async () => {
  await sequelize.authenticate()
  await sequelize.sync({ force: false })
}
