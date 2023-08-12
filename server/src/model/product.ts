import { DataTypes } from 'sequelize'
import sequelize from '../database'

const Product = sequelize.define('Product', {
  ProductId: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.STRING,
    unique: true,
  },
})

export default Product
