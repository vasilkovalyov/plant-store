import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('plantStore', 'root', 'root', {
  dialect: 'mssql',
})

export default sequelize
