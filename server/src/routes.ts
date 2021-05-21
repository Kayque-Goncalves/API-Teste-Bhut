import { Router } from 'express'

import AuthController from './app/controller/AuthController'
import CarController from './app/controller/CarController'
import UserController from './app/controller/UserController'
import authMiddleware from './app/middlewares/authMiddleware'

const router = Router()

// Rota de Authenticação (Cria o token)
router.post('/auth', AuthController.authenticate)

// Rotas de usuarios
router.post('/users', UserController.store)
router.get('/users', authMiddleware, UserController.index)

// Rotas de carros
router.get('/cars', CarController.index)
router.post('/cars', authMiddleware, CarController.store)
router.patch('/cars/:id', authMiddleware, CarController.update)
router.delete('/cars/:id', authMiddleware, CarController.delete)

export default router
