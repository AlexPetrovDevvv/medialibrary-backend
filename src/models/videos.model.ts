import mongoose from "mongoose";

export interface IVideoDocument extends Document {
    name: string,
    url: string
}


const schema = new mongoose.Schema<IVideoDocument>({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    }
})

const Video = mongoose.model<IVideoDocument>("Video", schema);

export default Video;