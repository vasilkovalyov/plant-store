import { Response, NextFunction } from 'express'
import TokenService from '../services/token.service'
import { IRequestWithAuthUser, ITokenData } from 'types/token'

export default async function (
  req: IRequestWithAuthUser,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({ message: 'User is not authorized!' })
    }

    const userData = await TokenService.validateAccessToken(token)

    if (!userData) {
      return res.status(401).json({ message: 'Token has been destroyed!' })
    }

    req.user = userData as ITokenData

    return next()
  } catch (err) {
    return res.status(401).json({ message: 'User is not authorized!' })
  }
}
