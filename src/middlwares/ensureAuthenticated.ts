import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

const ensureAuthenticated =
  (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
      return res.status(401).end();
    }

    const [, token] = authToken.split(' ');

    try {
      console.log(token);
      const { sub } = verify(token, process.env.JWT_KEY) as IPayload;

      req.user_id = sub;

      return next();
    } catch (err) {
      return res.status(401).json({error: 'Invalid token'});
    }
  }

export {ensureAuthenticated}