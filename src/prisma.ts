import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
    log: ['query'],
});


// async function init() {

//     const newUser = await prisma.user.create({
//         data: {
//             email: "valdirpiresba@gmail.com",
//             name: "valdirsilva",
//             password: "masterti"
//         },
//     });

//     console.log('Novo usuário criado')
//     console.log(newUser)
// }
