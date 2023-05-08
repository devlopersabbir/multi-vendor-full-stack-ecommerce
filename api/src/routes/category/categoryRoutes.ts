import { Router } from "express";
import { categoryController } from "../../controllers";
import { authentication } from "../../middlewares/authMiddleware";
import { authoraization } from "../../middlewares/authoraizationMiddleware";
import { Role } from "../../utils/enum/enum";

const routes = Router();

routes.post(
  "/create",
  authentication,
  authoraization([Role.ADMIN, Role.VENDOR]),
  categoryController.store
);
routes.get(
  "/get-all",
  authentication,
  authoraization([Role.ADMIN, Role.VENDOR]),
  categoryController.index
);

export default routes;
