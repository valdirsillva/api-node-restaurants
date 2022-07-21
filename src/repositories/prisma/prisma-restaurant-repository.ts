import { prisma } from "../../prisma";
import { RestaurantRepository, RestaurantCreateData } from "../restaurant-repository";

export class PrismaRestaurantRepository implements RestaurantRepository {
    async create({ name, description, opening_hours, price, payment_method, image }: RestaurantCreateData) {
        await prisma.restaurant.create({
            data: {
                name: name,
                description: description,
                opening_hours: opening_hours,
                price: price,
                payment_method: payment_method,
                image: image

            }
        })
    }

    async findAll() {
        const restaurants = await prisma.restaurant.findMany();

        return restaurants;
    }
}