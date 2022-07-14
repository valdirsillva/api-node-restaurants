import { UserRepository, UserCreateData } from '../user-repository';
import { prisma } from '../../prisma';

export class PrismaUserRepository {
    create({ email, name, password }: UserCreateData) {
        prisma.user.create({
            data: {
                email: email,
                name: name,
                password: password
            }
        })
    }
}