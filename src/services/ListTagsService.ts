import {getCustomRepository} from "typeorm";
import {TagsRepositories} from "../repositories/TagsRepositories";

class ListTagsService {
    async execute() {
        const tagsRepository = getCustomRepository(TagsRepositories);
        return await tagsRepository.find();
    }
}

export { ListTagsService };