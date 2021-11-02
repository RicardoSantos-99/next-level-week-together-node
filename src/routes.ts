import { Router } from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {FindUserController} from "./controllers/FindUserController";
import {CreateTagController} from "./controllers/CrateTagController";
import {ensureAdmin} from "./middlwares/ensureAdmin";

const createUserController = new CreateUserController();
const userController = new FindUserController()
const createTagController = new CreateTagController()

const router = Router();

router.post("/user", createUserController.handle);

router.get("/user/:email", userController.index);

router.post("/tag", ensureAdmin, createTagController.handle);

export { router };