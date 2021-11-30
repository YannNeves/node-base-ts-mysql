import { Request, Response } from 'express';
import { User } from '../models/User';
import { generateToken } from '../config/passport';
import { sendMail } from '../config/mailer';

export const register = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {

        let { email, password } = req.body;
        let hasUser = await User.findOne({ where: { email }});

        if(!hasUser) {
            let newUser = await User.create({ email, password });
            const token = generateToken({ id: newUser.id });

            let message = {
                from: 'Yann Neves <yannvr@hotmail.com>',
                to: email,
                subject: 'Cadastro feito com sucesso',
                html: 'Opa <strong>Teste</strong>, como vai?',
                text: 'Opa Teste, como vai?'
            };

            sendMail(message);
            
            res.status(201).json({ id: newUser.id, token });
        } else {
            res.json({ error: 'E-mail já existe.'});
        }
    }

    res.json({ error: 'E-mail e/ou senha não enviados.'});
}

export const login = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let { email, password } = req.body;

        let user = await User.findOne({
            where: { email, password }
        });

        if (user) {
            const token = generateToken({ id: user.id });
            res.json({ status : true, token });
            return;
        }
    }

    res.json({ status: false });
}