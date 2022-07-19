import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
import { PrismaRestaurantRepository } from "../repositories/prisma/prisma-restaurant-repository";
import uploadConfig from "../upload/upload";

const router = Router();
const upload = multer(uploadConfig);

router.get('/restaurants', async (req: Request, res: Response, next: NextFunction) => {

    const prismaRestaurantRepository = new PrismaRestaurantRepository();

    const restaurants = await prismaRestaurantRepository.findAll();

    res.status(StatusCodes.OK).send(restaurants);
})

router.post('/restaurant', upload.single('image'), async (req: Request, res: Response, next: NextFunction) => {


    // console.log(image);

    const { name, description, price, opening_hours, payment_method, image } = req.body;

    const prismaRestaurantRepository = new PrismaRestaurantRepository();

    await prismaRestaurantRepository.create({
        name, description, price, opening_hours, payment_method, image
    });

    return res.status(StatusCodes.CREATED).send();
})

export default router;