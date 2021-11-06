import {getCustomRepository} from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";


interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      where: {
        email
      }
    })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }

    return sign(
      {
        email: user.email
      },
      process.env.JWT_KEY,
      {
        subject: user.id, expiresIn: '1d'
      }
    )
  }
}

export { AuthenticateUserService }