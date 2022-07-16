import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaUserRepository } from "../repositories/prisma/prisma-user-reposotory";

const routerUser = Router();

routerUser.post('/user', async (req: Request, res: Response, next: NextFunction) => {

    const { email, name, password } = req.body;

    const prismaUserRepository = new PrismaUserRepository();

    await prismaUserRepository.create({
        email, name, password
    });

    return res.status(StatusCodes.CREATED).send();
})

routerUser.get('/users', async (req: Request, res: Response, next: NextFunction) => {

    const prismaUserRepository = new PrismaUserRepository();

    const users = await prismaUserRepository.getAll();

    res.status(StatusCodes.OK).send(users);
})


export default routerUser;