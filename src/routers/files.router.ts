import { Router } from "express";
import VideosController from "../controllers/videos.controller";
import {uploadVideosNameSchema } from "../schemas/videos.schema";
import fileValidate from "../middlewares/filename.middleware";
import fileMiddleware from "../middlewares/file.middleware"

const fileRouter = Router();

fileRouter.post("/videos", fileMiddleware.single('file'), fileValidate(uploadVideosNameSchema), VideosController.uploadVideos);
fileRouter.get("/videos", VideosController.getVideos);
fileRouter.patch('/videos', fileMiddleware.single('file'), VideosController.updateVideos)
fileRouter.delete('/videos', VideosController.deleteVideos)

export default fileRouter;