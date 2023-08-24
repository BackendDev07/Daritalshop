import { Router } from "express";
import { userVerify } from "../common/user-verify.middleware";
import bodyValidate from "../common/body-validate.middleware";
import imageModel from "./image.model";
import imageController from "./image.controller";

const router = Router()

router.post('/', userVerify(['admin']), bodyValidate(imageModel.createImage), imageController.createImage)
router.delete('/:id', userVerify(['admin']), imageController.deleteImage)

export default router