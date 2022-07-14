import { Router, Request, Response, NextFunction } from "express";
import { PrismaUserRepository } from "../repositories/prisma/prisma-user-reposotory";

const router = Router();

router.get('/restaurant', (req: Request, res: Response, next: NextFunction) => {

    const restaurants = req.body;
    console.log(restaurants)
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

    console.log(users)
})

export default router;