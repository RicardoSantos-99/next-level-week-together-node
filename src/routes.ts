import { Router } from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {FindUserController} from "./controllers/FindUserController";
import {CreateTagController} from "./controllers/CrateTagController";
import {ensureAdmin} from "./middlwares/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";

const createUserController = new CreateUserController();
const userController = new FindUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()

const router = Router();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);


router.get("/users/:email", userController.index);

export { router };