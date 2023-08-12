import express, { Request, Response } from 'express'

import UserModel from '../model/user'
import AuthController from '../controllers/auth.controller'

const router = express.Router()

router.post('/registration-user', AuthController.baseRegistration)
router.post('/login', AuthController.baseLogin)

router.get('/delete-user', async (req: Request, res: Response) => {
  try {
    const user = await UserModel.destroy({
      where: {
        UserId: 1,
      },
    })
    if (user === 1) {
      return res.status(200).json(true)
    }
  } catch (e) {
    console.log(e)

    if (!(e instanceof Error)) return
    return res.status(400).json({
      error: e.message,
    })
  }
})

router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll()
    return res.status(200).json(users)
  } catch (e) {
    console.log(e)

    if (!(e instanceof Error)) return
    return res.status(400).json({
      error: e.message,
    })
  }
})

export default router
