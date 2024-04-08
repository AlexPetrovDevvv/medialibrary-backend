import { NextFunction, Request, Response } from "express";
import { IVideoDocument } from "../models/videos.model";
import { UploadVideosNameType } from "../schemas/videos.schema";
import videosService from "../services/videos.service";
import fs from "fs"
import config from "config";


class VideosController{
    async uploadVideos(
        req: Request<{}, {}, UploadVideosNameType>,
        res: Response,
        next: NextFunction
    ) {
        try {
            const videosData = JSON.parse(JSON.stringify(req.body));
            let url = `${config.get("siteUrl")}/uploads/videos/${req.file?.filename}`
            const data = <IVideoDocument>{
                name: videosData.name,
                url: url
            }
            const video = await videosService.uploadVideo(data);
            return res.json(video);
        } catch (e) {
            next(e);
        }
    }
    async getVideos(req: Request, res: Response, next: NextFunction) {
        try {
            const videosList = await videosService.getVudeos();
            return res.json(videosList);
        } catch (e) {
            next(e);
        }
    }
    async updateVideos(req: Request, res: Response, next: NextFunction) {
        try {
            const data = JSON.parse(JSON.stringify(req.body))
            const VideoId = data.id
            const oldVideo = await videosService.getVideo(VideoId)
            const oldVideoUrlArray = oldVideo.url.split('/')
            const oldVideoPath = `../upload/videos/${oldVideoUrlArray[oldVideoUrlArray.length - 1]}`
            if(oldVideoUrlArray[oldVideoUrlArray.length - 1] !== req.file?.filename) {
                fs.unlink(oldVideoPath, (err) => {
                    if (err)
                    //@ts-ignore
                    console.log(`successfully deleted ${oldVideoPath}`);
                })
            }
            let url = `${config.get("siteUrl")}/uploads/videos/${req.file?.filename}`
            const updateVideo = await videosService.updateVideos(VideoId, url);
            return res.json(updateVideo);
        } catch (e) {
            next(e);
        }
    }
    async deleteVideos(req: Request, res: Response, next: NextFunction) {
        try {
            const VideoId = req.body.id
            const video = await videosService.deleteVideos(VideoId)
            const videoUrlArray = video.url.split('/')
            const videoPath = `../upload/videos/${videoUrlArray[ videoUrlArray.length - 1]}`
            fs.unlink(videoPath, (err) => {
                if (err)
                //@ts-ignore
                console.log(`successfully deleted ${videoPath}`);
            })
            return res.json("Видео удалено")
        } catch (e) {
            next(e);
        }
    }
}

export default new VideosController();