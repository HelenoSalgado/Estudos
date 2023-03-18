import prisma  from '../database/prisma';
import { Request, Response } from 'express';
import { Service, serviceSchema } from '../helpers/service/valideService';
import { z } from 'zod';

class BarberShopController {

  static async schedulingsShow(req: Request, res: Response) {
    
    try {
      const scheduling = await prisma.scheduling.findMany({
        select: {
          data: true,
          hora: true,
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
              nome: true,
              telefone: true
            },
          },
        },
    });
    return res.status(200).json(scheduling);

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async usersShow(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany({
        select: {
          nome: true,
          email: true,
          telefone: true
        },
      });
      return res.status(200).json(users);

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async serviceCreate(req: Request, res: Response) {

    try {

      const service: Service = req.body;
      
      const data: any = serviceSchema.parse(service);

      const createService = await prisma.service.create({ 
        data,
       });
      return res.status(200).json(createService);

    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          errors: err.errors.map(({ message, path }) => ({
            message,
            field: path.join("."),
          })),
        });
      }

      return res.status(500).json({
        message: "Internal server error",
      });
    };
    
  };

  static async servicesShow(req: Request, res: Response) {
    try {
      const services = await prisma.service.findMany({
        select: {
          id: true,
          nome: true,
          loja: true,
          preco: true,
          descricao: true
        },
      });
      return res.status(200).json(services);

    } catch (err) {
      res.status(400).json({ err: err });
    };
  };

  static async serviceUpdate(req: Request, res: Response){

    try {

      const service: Service =  req.body;

      const data = serviceSchema.parse(service);

      const updateService = await prisma.service.update({
         where: { id: req.body.id },
         data,
      });
      return res.status(200).json(updateService);

    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          errors: err.errors.map(({ message, path }) => ({
            message,
            field: path.join("."),
          })),
        });
      }
      return res.status(400).json({ err });
    };
  };

  static async servicesDelete(req: Request, res: Response) {
    try {
      await prisma.service.delete({
        where: { id: req.body.id }
      })
      return res.status(200).json({ message: 'Serviço deletado com sucesso.'});

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };
};

export = BarberShopController;