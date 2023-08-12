import { Request } from 'express'

export interface ITokenData {
  UserId: string
  iat: number
  exp: number
}

export interface IRequestWithAuthUser extends Request {
  user?: ITokenData | null
}
