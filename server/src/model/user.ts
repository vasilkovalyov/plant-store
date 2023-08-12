import { DataTypes } from 'sequelize'
import sequelize from '../database'

interface IUser {
  UserId: number
  FirstName: string
  LastName: string
  Birthday: string | null
  UserType: string
  Email: string
  Phone: string | null
}

export interface IBaseLoginUser extends Pick<IUser, 'Email'> {
  Password: string
}

export interface IUserBaseRegistration extends Omit<IUser, 'UserId'> {
  Password: string
}

const User = sequelize.define(
  'User',
  {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    UserType: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    createdAt: false,
  }
)

export default User
