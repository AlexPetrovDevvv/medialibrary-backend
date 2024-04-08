import { Router } from "express";
import usersController from "../controllers/users.controller";
import validate from "../middlewares/zod.middleware";
import {
  CreateUserReqSchema,
  GetUserReqSchema,
  UpdateUserRoleReqSchema,
} from "../schemas/users.schema";

const usersRouter = Router();

usersRouter.post(
  "/",
  validate(CreateUserReqSchema),
  usersController.createUserHandler
);

usersRouter.get("/", usersController.getUsersHandler);

usersRouter.get(
  "/:userId",
  validate(GetUserReqSchema),
  usersController.getUserHandler
);

usersRouter.patch(
  "/:userId/role",
  validate(UpdateUserRoleReqSchema),
  usersController.updateUserRoleHandler
);

usersRouter.delete(
  "/:userId",
  validate(GetUserReqSchema),
  usersController.deleteUserHandler
);

export default usersRouter;
