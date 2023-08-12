import jwt from 'jsonwebtoken'
import expiresAuth from '../constants/expiresAuth'

class TokenService {
  static async generateTokens(
    payload: { UserId: string },
    accessTokenTime: string = expiresAuth.expiresAccessToken,
    refreshTokenTime: string = expiresAuth.expiresRefreshToken
  ) {
    const accessToken = await jwt.sign(
      payload,
      process.env.JWT_ACCESS_SECRET || '',
      {
        expiresIn: accessTokenTime,
      }
    )
    const refreshToken = await jwt.sign(
      payload,
      process.env.JWT_REFRESH_SECRET || '',
      { expiresIn: refreshTokenTime }
    )
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    }
  }

  static async validateAccessToken(accessToken: string) {
    const userData = await jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET || ''
    )
    return userData
  }
}

export default TokenService
