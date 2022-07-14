import { Router, Request, Response, NextFunction } from "express";

const restaurantRoute = Router();

restaurantRoute.get('/restaurant', (req: Request, res: Response, next: NextFunction) => {

    const restaurants = req.body;
    console.log(restaurants)
})

export default restaurantRoute;