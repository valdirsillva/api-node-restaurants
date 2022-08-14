import { Request } from "express";
import multer from 'multer';
import path from 'path';
import mime from "mime-types";


const storage = multer.diskStorage({
    destination: function (request: Request, file, cb) {
        cb(null, "public/images/");
    },

    filename: function (request: Request, file, cb) {
        const type = mime.extension(file.mimetype);

        cb(null, `${new Date().getTime()}.${type}`);
    }
})


export default { storage };