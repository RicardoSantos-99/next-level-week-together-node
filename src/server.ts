import express, { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv'
import 'express-async-errors'
import { router } from './routes'
import 'reflect-metadata'

import "./database"

dotenv.config();
const app = express();

app.use(express.json())
app.use(router)

app.use(
    (
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});