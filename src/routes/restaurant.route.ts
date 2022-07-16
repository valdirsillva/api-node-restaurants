import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaRestaurantRepository } from "../repositories/prisma/prisma-restaurant-repository";

const router = Router();

router.get('/restaurants', async (req: Request, res: Response, next: NextFunction) => {

    const prismaRestaurantRepository = new PrismaRestaurantRepository();

    const restaurants = await prismaRestaurantRepository.findAll();

    res.status(StatusCodes.OK).send(restaurants);
})

router.post('/restaurant', async (req: Request, res: Response, next: NextFunction) => {

    const { name, description, price, opening_hours, payment_method } = req.body;

    const prismaRestaurantRepository = new PrismaRestaurantRepository();

    await prismaRestaurantRepository.create({
        name, description, price, opening_hours, payment_method
    });

    return res.status(StatusCodes.CREATED).send();
})

export default router;