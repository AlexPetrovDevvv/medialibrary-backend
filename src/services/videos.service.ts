import ApiError from "../exceptions";
import Video, {IVideoDocument} from "../models/videos.model";



class VideosService{
    async uploadVideo(data: IVideoDocument) {
        const video = Video.create(data)
        return video
    }
    async getVudeos() {
        return await Video.find()
    }
    async updateVideos(id: string, url: string) {
        const item =  await Video.findByIdAndUpdate(id, { url: url })
        if (!item) {
            throw ApiError.NotFound("Видео не найдено");
        }
            return item;
    }
    async deleteVideos(id: string) {
        const item =  await Video.findByIdAndDelete(id)
        if (!item) {
            throw ApiError.NotFound("Видео не найдено");
        }
            return item;
    }
    async getVideo(id: string) {
        const item =  await Video.findById(id)
        if (!item) {
            throw ApiError.NotFound("Видео не найдено");
        }
            return item;
    }
}

export default new VideosService();