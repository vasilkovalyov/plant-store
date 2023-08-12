import { Request, Response } from 'express'
import RegistrationService from '../services/registration.service'
import LoginService from '../services/login.service'

class AuthController {
  static async baseRegistration(req: Request, res: Response) {
    try {
      const response = await RegistrationService.baseRegistration(req.body)
      res.status(200).json({
        message: response,
      })
    } catch (e) {
      if (!(e instanceof Error)) return
      return res.status(400).json({
        error: e.message,
      })
    }
  }

  static async baseLogin(req: Request, res: Response) {
    try {
      const response = await LoginService.baseLogin(req.body)

      res.cookie('token', response.Token, {
        domain: 'localhost',
        path: '/',
        secure: true,
      })

      res.status(200).json({
        message: response,
      })
    } catch (e) {
      if (!(e instanceof Error)) return
      return res.status(400).json({
        error: e.message,
      })
    }
  }
}

export default AuthController
