import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';
import { z } from 'zod';
import ShortUniqueId from 'short-unique-id';


const prisma = new PrismaClient({
  log: ['query'],
});

async function bootstrap() {

  const fastify = Fastify({
     logger: true,
  });

  await fastify.register(cors, {
     origin: true,
  })
  
  // localhost:3333/

  fastify.get('/pools/count', async () => {

    const poolsCount = await prisma.pool.count();
    
    return poolsCount;

  });

  fastify.get('/guesses/count', async () => {

    const guessesCount = await prisma.guess.count()
    
    return guessesCount;

  });

  fastify.get('/users/count', async () => {

    const usersCount = await prisma.user.count()

    console.log(usersCount)
    
    return usersCount;

  });

  fastify.post('/pools', async ( request, reply) => {

    const createPoolBody = z.object({
      title: z.string()
    })

    const { title } = createPoolBody.parse(request.body) 

    const generate = new ShortUniqueId({ length: 6 })
    const code = String(generate()).toUpperCase()

    await prisma.pool.create({
      data: {
        title,
        code
      }
    })

    return reply.status(201).send({ code })

  });

  await fastify.listen({ port: 3333, host: '0.0.0.0' });

}

bootstrap();