import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
import { PrismaRestaurantRepository } from "../repositories/prisma/prisma-restaurant-repository";
import uploadConfig from "../upload/upload";

const router = Router();
const upload = multer(uploadConfig);

const prismaRestaurantRepository = new PrismaRestaurantRepository();

router.get('/restaurants', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const restaurants = await prismaRestaurantRepository.findAll();
        res.status(StatusCodes.OK).send(restaurants);
    } catch (error) {
        next(error)
    }
})

router.post('/restaurant', upload.single('image'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const imagem = req.file?.filename;
        const { name, description, price, opening_hours, payment_method } = req.body;
        const image = imagem

        await prismaRestaurantRepository.create({
            name, description, price, opening_hours, payment_method, image
        });

        return res.status(StatusCodes.CREATED).send({ sucesso: 'Restaurante cadastrado.' });

    } catch (error) {
        next(error)
    }
})

router.delete('/restaurant/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const restaurantId = parseInt(req.params.id);

        await prismaRestaurantRepository.delete(restaurantId);

        return res.status(StatusCodes.OK).send({ sucesso: 'Restaurante deletado.' });

    } catch (error) {
        next(error)
    }
})

export default router;