import { Router } from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import {FindUserController} from "./controllers/FindUserController";
import {CreateTagController} from "./controllers/CrateTagController";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {CreateComplimentController} from "./controllers/CreateComplimentController";
import {ListUserReceiverComplimentsController} from "./controllers/ListUserReceiveComplimentsController";
import {ListUserSenderComplimentsController} from "./controllers/ListUserSenderComplimentsController";
import {ListTagsController} from "./controllers/ListTagsController";

import {ensureAdmin} from "./middlwares/ensureAdmin";
import {ensureAuthenticated} from "./middlwares/ensureAuthenticated";

const createUserController = new CreateUserController();
const userController = new FindUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
const listUserSenderComplimentsController = new ListUserSenderComplimentsController()
const listTagsController = new ListTagsController()

const router = Router();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/:email", userController.index);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiverComplimentsController.handle);

export { router };