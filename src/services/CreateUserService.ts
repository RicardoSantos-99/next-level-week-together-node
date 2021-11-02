import {UsersRepositories} from "../repositories/UsersRepositories";
import {hash} from "typeorm/util/StringUtils";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({email, name, password, admin}: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await userRepository.findOne({
            where: {email}
        });

        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const hashedPassword = hash(password);

        const user = await userRepository.create({
            name,
            email,
            password: hashedPassword,
            admin
        });

        await userRepository.save(user);

        return user;
    }
}

export {CreateUserService};
