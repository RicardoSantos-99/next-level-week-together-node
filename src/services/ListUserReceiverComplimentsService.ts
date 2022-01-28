import {getCustomRepository} from "typeorm";
import {ComplimentsRepositories} from "../repositories/ComplimentsRepositories";


class ListUserReceiverComplimentsService {

  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    return await complimentsRepositories.find({
      where: {
        user_receiver: user_id
      },
      relations: ['user_sender', 'user_receiver', 'tags']
    });
  }
  
}

export { ListUserReceiverComplimentsService};