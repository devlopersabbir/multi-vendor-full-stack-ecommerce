import { Router } from "express";
import { userController } from "../../controllers";
import { authentication } from "../../middlewares/authMiddleware";
import { authoraization } from "../../middlewares/authoraizationMiddleware";
import { Role } from "../../utils/enum/enum";

const routes = Router();

routes.get(
  "/get-all",
  authentication,
  authoraization([Role.ADMIN]),
  userController.index
);
routes.post("/register", userController.store);
routes.get("get-single/:uuid", userController.find);

export default routes;
