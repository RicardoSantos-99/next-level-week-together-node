import {getCustomRepository} from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories";

interface IUserRequest {
    email: string;
}


class FindUserService {
    execute({ email }: IUserRequest ) {
        const userRepository = getCustomRepository(UsersRepositories);

        return userRepository.findOne({
            where: {
                email
            }
        });
    }
}

export {FindUserService};