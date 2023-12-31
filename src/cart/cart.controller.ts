import { ControllerType } from '../common/type'
import cartService from './cart.service'

const addProductToCart: ControllerType = async (req, res, next) => {
  try {
    const { productId } = req.body
    const { id } = res.locals.user

    const cart = await cartService.addProductToCard(+productId, +id)

    res.send({
      message: 'Added Product to Cart',
      cartItem: cart,
    })
  } catch (e) {
    next(e)
  }
}

const removeProductFromCart: ControllerType = async (req, res, next) => {
  try {
    const { productId } = req.body
    const { id } = res.locals.user

    const removedProduct = await cartService.removeProductFromCart(
      +id,
      +productId
    )

    res.send({
      message: 'Removed Product from Cart',
      cartItem: removedProduct,
    })
  } catch (e) {
    next(e)
  }
}

const getUserCart: ControllerType = async (req, res, next) => {
  try {
    const { id } = res.locals.user

    const cart = await cartService.getUserCart(+id)

    res.send({
      message: "User cart",
      cart
    })
  } catch(err) {
    next(err)
  }
}

const deleteProductFromCart: ControllerType = async ( req, res, next ) => {
  const { user } = res.locals.user
  const { id } = req.params

  const cart = await cartService.deleteProductFromCart(user.id, +id)

  res.send({
    message: "Product deleted from cart",
    cart
  })
}

export default {
  addProductToCart,
  removeProductFromCart,
  getUserCart,
  deleteProductFromCart
}