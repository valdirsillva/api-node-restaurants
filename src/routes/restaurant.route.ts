import { Router, Request, Response, NextFunction } from "express";

const restaurantRoute = Router();

restaurantRoute.get('/restaurants', (req: Request, res: Response, next: NextFunction) => {
    res.send('Tudo continua funcionando');
})

export default restaurantRoute;