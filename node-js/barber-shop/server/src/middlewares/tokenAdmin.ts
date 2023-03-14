// import { Jwt } from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import { Request, Response } from 'express';

// function tokenAdmin(req: Request, res: Response, next: any){
//     const token = req.headers['x-acess-token'];
//     Jwt.verify(token, process.env.SECRET_SUDO, (err: Jwt, decoded: Jwt) => {
//         if(err)
//            return res.status(401).json({ err: 'Você não tem permissão, autentique-se novamente.' });

//         req.userId = decoded.userId;

//         next();
//     })
// }

// module.exports = tokenAdmin;