import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';


const storage = new GridFsStorage({
    url: "mongodb+srv://zaidkmansoori8214:zaid8214@blog-app.nrglund.mongodb.net/?retryWrites=true&w=majority&appName=blog-app",
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 