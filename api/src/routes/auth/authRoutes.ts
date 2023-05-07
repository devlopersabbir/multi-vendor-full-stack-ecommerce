import { Router } from "express";
import { authController } from "../../controllers";

const routes = Router();

routes.post("/login", authController.login);
routes.post("/logout", authController.logout);
routes.get("/refresh-token", authController.refresh);

export default routes;
