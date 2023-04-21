import prisma from "../../../lib/prisma";

export default {
    Query: {
        posts: () => prisma.post.findMany(),
        post: (_: any, { id }: any) => prisma.post.findUnique({ where: id }),
    },
    Mutation: {
        createPost: (_: any, { data }: any) => prisma.post.create(data),
        updatePost: (_: any, { id, data }: any) => prisma.post.update({ where: { id }, data}),
    },
};