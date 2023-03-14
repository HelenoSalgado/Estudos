// import { Jwt } from 'jsonwebtoken';
// import dotenv from 'dotenv';

// function tokenUser(req: any, res: Response, next: any){
//     const token = req.headers['x-acess-token'];
//     Jwt.verify(token, process.env.SECRET, (err: Jwt, decoded: Jwt) => {
//         if(err)
//            return res.status(401).json({ err: 'Você não tem permissão, autentique-se novamente.' });

//         req.userId = decoded.userId;

//         next();
//     })
// }

// module.exports = tokenUser;