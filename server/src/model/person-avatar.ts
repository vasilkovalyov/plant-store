import { DataTypes } from 'sequelize'
import sequelize from '../database'

import User from './user'

const UserAvatar = sequelize.define('UserAvatar', {
  UserAvatarId: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  UserId: {
    type: DataTypes.INTEGER,
  },
  Url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
})

UserAvatar.hasOne(User, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
})

UserAvatar.belongsTo(User)

export default UserAvatar
