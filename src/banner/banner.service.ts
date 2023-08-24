import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"

const createBanner = async ( image: string, productId: number ) => {
    const banner = await prisma.banner.create({
        data: {
            image,
            productId
        }
    })

    return createBanner
}

const deleteBanner = async ( id: number ) => {
    const findBanner = await prisma.banner.findUnique({
        where: {
            id
        }
    })

    if( !findBanner ) {
        throw createHttpError(404, "Banner not found")
    }

    const banner = await prisma.banner.delete({
        where: {
            id
        }
    })

    return banner
}

const getAll = async () => {
    const banners = await prisma.banner.findMany()

    return banners
}

export default {
    createBanner,
    deleteBanner,
    getAll
}