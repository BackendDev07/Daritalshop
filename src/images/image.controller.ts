import { ControllerType } from "../common/type"
import imageService from "./image.service"


const createImage: ControllerType = async (req, res, next) => {
    try {
        const { img, productId } = req.body

        const image = await imageService.createImage(img, productId)

        res.status(201).send({
            message: "Image created",
            image
        })
    } catch (err) {
        next(err)
    }
}

const deleteImage: ControllerType = async (req, res, next) => {
    try {
        const { id } = req.params

        const image = await imageService.deleteImage(+id)

        res.send({
            message: "Image deleted",
            image
        })
    } catch (err) {
        next(err)
    }
}

export default {
    createImage,
    deleteImage
}