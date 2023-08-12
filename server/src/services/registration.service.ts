import UserModel, { IUserBaseRegistration } from '../model/user'
import bcrypt from 'bcrypt'

import UserService from './user.service'

class AuthService {
  static async baseRegistration(props: IUserBaseRegistration) {
    const { FirstName, LastName, UserType, Email, Password } = props
    const userService = new UserService()

    const isExist = await userService.isExistUserWithEmail(Email)
    if (isExist !== null || isExist !== undefined) {
      throw new Error('User with email already exist')
    }

    const hashedPassword = await bcrypt.hash(Password, 10)

    const newUser = await UserModel.create({
      FirstName: FirstName,
      LastName: LastName,
      UserType: UserType,
      Email: Email,
      Password: hashedPassword,
    })

    if (newUser) {
      return 'User registered successfull'
    }
  }
}

export default AuthService
