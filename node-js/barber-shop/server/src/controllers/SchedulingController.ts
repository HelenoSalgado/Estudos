import prisma  from '../database/prisma';
//import processDataUser from '../helpers/processDataUser';
// verifyIdService = require('../helpers/verifyIdService');
import { Request, Response } from 'express';

class SchedulingController {

  static async create(req: Request, res: Response) {

    const { nome, email, telefone, id_servico, data, hora, senha } = req.body;

    const connect = verifyIdService(id_servico);

    try {

      const dataUser = processDataUser(nome, email, telefone, senha);

      const userExist = await prisma.user.findUnique({
        where: { email },
      });

      if (userExist){
        return res.status(200).json({
          message: 'Usuário já existe, faça login para continuar.' 
        });
      };

      const scheduling = await prisma.scheduling.create({
         data: {
          id: dataUser.id,
          data,
          hora,
          servico: {
            connect, 
          },
          usuario: {
            create: dataUser
          },
         },
         include: {
          servico: {
            select: {
              nome: true,
              loja: true,
              preco: true,
              descricao: true
            },
          },
          usuario: {
            select: {
              id: true,
              nome: true,
              telefone: true,
              email: true,
            },
          },
         },
      });
      return res.status(200).json(scheduling);
  
    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async show(req: Request, res: Response) {
    try {
      const schedulings = await prisma.scheduling.findUnique({
        where: { usuarioId: req.body.id },
        select: {
          data: true,
          hora: true,
          servico: {
            select: {
              id: true,
              nome: true,
              loja: true,
              preco: true,
              descricao: true
            },
          },
        },
      });
      if (!schedulings) 
         return res.status(400).json({ message: 'Sem agendamento'});

      return res.status(200).json(schedulings);

    } catch (err: any) {
      res.status(400).json({err: err.message});
    };
  };

  static async update(req: Request, res: Response) {
    
    const { id, id_servico, data, hora } = req.body;

    const connect = verifyIdService(id_servico)

    try {
     const user = await prisma.scheduling.upsert({
      where: { usuarioId: id },
      update: {
        data,
        hora,
        servico: {
          connect,
        },
      },
      create: {
        id,
        data,
        hora,
        servico: {
          connect,
        },
        usuario: {
          connect: {
            id
          },
        },
      },
     });
     return res.status(200).json(user);

    } catch (err: any) {
      res.status(400).json({err: err.message});
    }; 
  };
 
  static async delete(req: Request, res: Response) {
    try {
      await prisma.scheduling.delete({
        where: { id: req.body.id }
      });
      return res.status(200).json({ 
        message: 'Agendamento deletado com sucesso.' 
      });

    } catch (err: any) {
      console.log(err);
      res.status(400).json({err: err.message});
    };
  };
};

module.exports = SchedulingController;