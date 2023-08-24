import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"

const createImage = async ( img: string, productId: number) => {
    const image = await prisma.images.create({
        data: {
            img,
            productId
        },
    })

    return image
}

const deleteImage = async ( id: number ) => {
    const findImage = await prisma.images.findUnique({
        where: {
            id
        }
    })

    if( !findImage ) {
        throw createHttpError(404, "Image not found")
    }

    const image = await prisma.images.delete({
        where: {
            id
        }
    })

    return image
}

export default {
    createImage,
    deleteImage
}