import {Request, Response} from 'express';
import {CreateUserService} from "../services/CreateUserService";
import {validateEmail} from '../utils/validateEmail';
import {validatePassword} from '../utils/validatePassword';
import {validateUsername} from '../utils/validateUsername';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, email, password, admin} = req.body;
        //
        // if (!email) {
        //     return res.json({
        //         error: 'Email is required'
        //     });
        // }
        //
        // if (!validateEmail(email)) {
        //     return res.json({
        //         error: 'Email is invalid'
        //     });
        // }
        //
        // if (!name) {
        //     return res.json({
        //         error: 'Name is required'
        //     })
        // }
        //
        // if (!validateUsername(name)) {
        //     return res.json({
        //         error: 'Name is invalid'
        //     })
        // }
        //
        // if (!password) {
        //     return res.json({
        //         error: 'Password is required'
        //     })
        // }
        //
        // if (!validatePassword(password)) {
        //     return res.json({
        //         error: 'Password is invalid'
        //     })
        // }

        const createUserService = new CreateUserService()


        const user = await createUserService.execute({
            name,
            email,
            password,
            admin
        });

        return res.json(user);
    }
}

export {CreateUserController};