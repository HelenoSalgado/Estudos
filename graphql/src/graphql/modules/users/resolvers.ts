import prisma from "../../../lib/prisma";

export default {
    Query: {
        users: () => prisma.user.findMany(),
        user: (_: any, { id }: any) => prisma.user.findUnique({ where: id }),
    },
    Mutation: {
        createUser: (_: any, { data }: any) => prisma.user.create({ data }),
        updateUser: (_: any, { id, data }: any) => prisma.user.update({ where: { id }, data}),
    },

};