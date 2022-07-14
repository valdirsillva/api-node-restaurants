import { UserRepository, UserCreateData } from '../user-repository';
import { prisma } from '../../prisma';

export class PrismaUserRepository implements UserRepository {
    async create({ email, name, password }: UserCreateData) {
        await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: password,
            }
        })
    }

    async getAll() {
        const users = await prisma.user.findUnique({
            where: {
                email: 'valdirpiresba@gmail.com',
            }
        })

        return users;
    }
}