import {Request, Response} from 'express';
import { FindUserService} from "../services/FindUserService";

class FindUserController {
    async index(req: Request, res: Response) {
        const { email } = req.params;


        if (!email) {
            throw new Error('Email is required');
        }


        const findUserService = new FindUserService()


        const user = await findUserService.execute({email});

        return res.json(user);
    }
}

export {FindUserController}