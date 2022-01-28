import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface tag {
  name: string;
}

class CreateTagService {
    async execute(name: string): Promise<tag> {
        const tagsRepository = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Name is required");
        }

        const tagAlreadyExists = await tagsRepository.findOne({ where: { name } });

        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const tag = tagsRepository.create({
            name
        });


        await tagsRepository.save(tag);

        return tag;
    }

}

export { CreateTagService };