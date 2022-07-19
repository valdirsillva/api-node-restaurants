export interface RestaurantCreateData {
    name: string,
    description: string,
    price: string,
    opening_hours: string,
    payment_method: string,
    image?: string | undefined,
}

export interface RestaurantRepository {
    create: (data: RestaurantCreateData) => Promise<void>
}