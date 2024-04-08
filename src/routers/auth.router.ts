import { Router } from "express";
import validate from "../middlewares/zod.middleware";
import authController from "../controllers/auth.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

import {
  AuthorizeReqSchema,
  ForgotPasswordReqSchema,
  ResetPasswordReqSchema,
  ReplaceEmailReqSchema,
  ReplacePasswordReqSchema,
} from "../schemas/auth.schema";

const authRouter = Router();

authRouter.post("/", validate(AuthorizeReqSchema), authController.loginHandler);

authRouter.get("/", authController.refreshHandler);

authRouter.delete("/", authController.logoutHandler);

authRouter.post(
  "/forgot-password",
  validate(ForgotPasswordReqSchema),
  authController.forgotPasswordHandler
);

authRouter.post(
  "/reset-password",
  validate(ResetPasswordReqSchema),
  authController.resetPasswordHandler
);

authRouter.patch(
  "/password",
  AuthMiddleware,
  validate(ReplacePasswordReqSchema),
  authController.replacePasswordHandler
);

authRouter.patch(
  "/email",
  AuthMiddleware,
  validate(ReplaceEmailReqSchema),
  authController.replaceEmailHandler
);

export default authRouter;
