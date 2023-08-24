import Joi from "joi";

const createImage = Joi.object({
    img: Joi.string().required(),
    productId: Joi.number().required()
})


export default {createImage}