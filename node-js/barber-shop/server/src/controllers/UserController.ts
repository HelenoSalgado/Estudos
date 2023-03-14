import prisma from '../database/prisma';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config'; 
import processDataUser from '../helpers/processDataUser';
import { Request, Response } from 'express';

class UserController {

  static async create(req: Request, res: Response) {

    const { nome, email, telefone, senha } = req.body;

    try {

      const dataUser = processDataUser(nome, email, telefone, senha);

      const userExist = await prisma.user.findUnique({
        where: { email },
      });

      if (!userExist) {
        const user = await prisma.user.create({
          data: dataUser,
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true
          },
        });
        return res.json(user);
      };
      return res.json({
        message: 'Usuário já existe.'
      });

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async show(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.body.id },
        select: {
          id: true,
          nome: true,
          email: true,
          telefone: true,
          agendamento: {
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
            },
          },
        },
      });
      return res.status(200).json(user)

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async update(req: Request, res: Response) {
    const { id, nome, email, telefone, senha } = req.body;

    if (email)
      return res.json({
        message: 'Você não pode atualizar o email.'
      });

    if (senha) {
      const salt = bcrypt.genSaltSync(10);
      var password = bcrypt.hashSync(senha, salt);
    };

    try {
      const user = await prisma.user.update({
        where: { id },
        data: {
          nome,
          telefone,
          senha: password
        },
        select: {
          nome: true,
          email: true,
          telefone: true
        },
      });
      return res.json(user);

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async delete(req: Request, res: Response) {
    try {
      await prisma.user.delete({
        where: { id: req.body.id },
      });
      return res.json({
        message: 'Usuário deletado com sucesso.'
      });

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async login(req: Request, res: Response) {

    const { email, senha } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: {
          email
        },
      });
      if (!user)
        return res.json({ message: 'Usuário não existe.' });

      // Check password
      const passwordChecked = bcrypt.compareSync(senha, user.senha);

      if (!passwordChecked)
        return res.status(401).json({ message: 'Falha na Autenticação.' });

      let secret: string = process.env.SECRET;

      // Autenticação para Admin
      if (user.email == process.env.SECRET_EMAIL){
          secret = process.env.SECRET_SUDO
      }

      const token = Jwt.sign({
        message: 'Você está autenticado.',
        userId: user.id,
      }, secret, {
        expiresIn: "5 days"
      });

      return res.status(200).json({ auth: true, token });

    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };

  static async logout(req, res) {

    try {
      const token = Jwt.sign({
      }, process.env.SECRET_LOGOUT, {
        expiresIn: 4000
      });

      return res.status(200).json({ auth: true, token });
    } catch (err: any) {
      res.status(400).json({ err: err.message });
    };
  };


}

module.exports = UserController;