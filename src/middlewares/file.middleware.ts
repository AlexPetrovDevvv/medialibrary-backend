import multer from "multer"

const storage = multer.diskStorage({
    destination(req, file, callback) {
        console.log(file)
        callback(null, "../upload/videos")
    },
    filename(req, file, callback) {
        callback(null, file.originalname)
    }
})

const types = ['video/mp4']

const fileFilter = (req: any, file: any, callback: any) => {
    if(types.includes(file.mimetype)) {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

export default multer({storage, fileFilter})