import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const getAll = async (req: Request, res: Response) => {

    const list = await Todo.findAll();
    res.status(200).json({ list });

}

export const getOne = async (req: Request, res: Response) => {

    const id: string = req.params.id;
    let todo = await Todo.findByPk(id);

    if (todo) {
        res.status(200).json({ todo });
    }

    res.status(404).json({ error: 'Item não encontrado' });

}

export const store = async (req: Request, res: Response) => {

    if (req.body.title) {
        
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });

        res.status(201).json({ item: newTodo });
    }

    res.status(400).json({ message:'Cadastrado com sucesso.', error: 'Dados não enviados.' });
}

export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    
    let todo = await Todo.findByPk(id);

    if (todo) {

        if(req.body.title){
            todo.title = req.body.title;
        }

        await todo.save();
        res.status(200).json({ message:'Atualizado com sucesso.', item: todo });

    } else {
        res.status(404).json({ error: 'Item não encontrado'})
    }
}

export const remove = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    
    let todo = await Todo.findByPk(id);

    if (todo) {
        await todo.destroy();
        res.status(200).json({ message: 'Deletado com sucesso.' });
    }

    res.status(404).json({ error: 'Item não encontrado' });
}