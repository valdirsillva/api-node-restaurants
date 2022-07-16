import { Router, Request, Response, NextFunction } from "express";
import { PrismaUserRepository } from "../repositories/prisma/prisma-user-reposotory";
import { PrismaRestaurantRepository } from "../repositories/prisma/prisma-restaurant-repository";

const router = Router();

router.get('/restaurants', async (req: Request, res: Response, next: NextFunction) => {

    const prismaRestaurantRepository = new PrismaRestaurantRepository();

    const restaurants = await prismaRestaurantRepository.findAll();

    res.status(200).send(restaurants);
})

router.post('/restaurant', async (req: Request, res: Response, next: NextFunction) => {

    const { name, description, price, opening_hours, payment_method } = req.body;

    const prismaRestaurantRepository = new PrismaRestaurantRepository();

    await prismaRestaurantRepository.create({
        name, description, price, opening_hours, payment_method
    });

    return res.status(201).send();
})

router.post('/user', async (req: Request, res: Response, next: NextFunction) => {

    const { email, name, password } = req.body;

    const prismaUserRepository = new PrismaUserRepository();

    await prismaUserRepository.create({
        email, name, password
    });

    return res.status(201).send();
})

router.get('/users', async (req: Request, res: Response, next: NextFunction) => {

    const prismaUserRepository = new PrismaUserRepository();

    const users = await prismaUserRepository.getAll();

    res.status(200).send(users);
})

export default router;