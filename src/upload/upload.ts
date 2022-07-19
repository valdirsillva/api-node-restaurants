import { Request } from "express";
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (request: Request, file, cb) {
        cb(null, "public/images/");
    },

    filename: function (request: Request, file, cb) {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})


export default { storage };