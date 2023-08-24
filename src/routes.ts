import { Router } from 'express'
import authRouter from './auth/auth.route'
import categoryRouter from './category/category.route'
import productRoute from './product/product.route'
import bannerRoute from './banner/banner.router'
import imageRoute from './images/image.route'
import cartRoute from './cart/cart.route'

const router = Router()

router.use('/auth', authRouter)
router.use('/category', categoryRouter)
router.use('/product', productRoute)
router.use('/banner', bannerRoute)
router.use('/image', imageRoute)
router.use('/cart', cartRoute)

export default router
