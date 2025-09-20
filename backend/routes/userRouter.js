import express from 'express'
import { loginUser, resgisterUser, adminLogin } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', resgisterUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

export default userRouter