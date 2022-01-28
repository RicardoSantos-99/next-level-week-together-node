import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

class CreateComplimentController {
    async handle(req: Request, res: Response) {
      const {
        tag_id,
        user_receiver,
        user_sender,
        message
      } = req.body;

      const createCompliment = new CreateComplimentService();

      const compliment = await createCompliment.execute({
        tag_id,
        user_receiver,
        user_sender,
        message
      });

        return res.json(compliment);

    }

}

export { CreateComplimentController };