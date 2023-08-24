import { Router } from "express";
import { userVerify } from "../common/user-verify.middleware";
import bannerController from "./banner.controller";

const router = Router()

router.post('/:id/product', userVerify(['admin']), bannerController.createBanner)
router.delete('/:id', userVerify(['admin']), bannerController.deleteBanner)
router.get('/', userVerify(['admin', "user", 'none']), bannerController.getAll)

export default router