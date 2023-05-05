import { Router } from "express";
import { authController } from "../../controllers/index";

const routes = Router();

routes.post("/register", authController.store);

export default routes;
