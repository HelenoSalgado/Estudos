import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {

  const user = await prisma.user.create({

    data: {
       name: 'Heleno Salgado',
       email: 'heleno@gmail.com',
       avatarUrl: 'https://github.com/HelenoSalgado.png'
    }

  })

  const pool = await prisma.pool.create({

    data: {
      title: 'Exemple Pool',
      code: 'HELES12',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        } 
      }
    }

  })

  await prisma.game.create({

    data: {
       date: '2022-11-05T17:28:52.252Z',
       firstTeamCountryCode: 'DE',
       secondTeamCountryCode: 'BR'
    }

  })

  await prisma.game.create({

    data: {
       date: '2022-11-05T12:28:52.252Z',
       firstTeamCountryCode: 'BR',
       secondTeamCountryCode: 'AR',

       guesess: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participants: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
       }

    }

  })

}

main()