import { NextFunction, Request, Response } from "express";
import bannerService from "./banner.service";

const createBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { image } = req.body
        const { productId } = req.params

        const banner = await bannerService.createBanner(image, +productId)

        res.status(201).send({
            message: "Banner created",
            banner
        })
    } catch (err) {
        next(err)
    }
}

const deleteBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const banner = await bannerService.deleteBanner(+id)

        res.send({
            message: 'Banner deleted',
            banner
        })
    } catch (err) {
        next(err)
    }
}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const banners = await bannerService.getAll()

        res.send({
            message: "All banners",
            banners
        })
    } catch (err) {
        next(err)
    }
}


export default {
    createBanner,
    deleteBanner,
    getAll
}