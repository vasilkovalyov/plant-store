import { IBaseLoginUser } from '../model/user'
import bcrypt from 'bcrypt'

import UserService from './user.service'
import TokenService from './token.service'

class AuthService {
  static async baseLogin({ Email, Password }: IBaseLoginUser) {
    const userService = new UserService()

    const user = await userService.isExistUserWithEmail(Email)
    if (user === null || user === undefined) {
      throw new Error('User with email doesn`t exist')
    }

    const validPass = await bcrypt.compare(Password, user.Password)
    if (!validPass) throw new Error('Wrong password')

    const tokenService = new TokenService()

    const token = await tokenService.generateTokens({
      UserId: user.UserId,
    })

    return {
      UserId: user.UserId,
      Token: token,
      UserType: user.UserType,
    }
  }
}

export default AuthService
