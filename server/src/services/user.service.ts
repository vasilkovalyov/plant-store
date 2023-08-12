import UserModel from '../model/user'

class UserService {
  async isExistUserWithEmail(email: string) {
    const response = await UserModel.findOne({
      where: {
        Email: email,
      },
    })
    return response?.toJSON()
  }
}

export default UserService
