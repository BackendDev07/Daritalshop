import { Router } from 'express'
import { userVerify } from '../common/user-verify.middleware'
import cartController from './cart.controller'

const router = Router()

router.post('/', userVerify(['user']), cartController.addProductToCart)
router.delete('/', userVerify(['user']), cartController.removeProductFromCart)
router.get('/', userVerify(['user']), cartController.getUserCart)
router.delete('/:id', userVerify(['user']), cartController.deleteProductFromCart)

export default router