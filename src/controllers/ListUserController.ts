import {Request, Response} from 'express';
import { ListUsersService} from "../services/ListUsersService";

class ListUserController {
    async handle(req: Request, res: Response) {

        const listUsersService = new ListUsersService()

        const user = await listUsersService.execute();

        return res.json(user);
    }
}

export {ListUserController}