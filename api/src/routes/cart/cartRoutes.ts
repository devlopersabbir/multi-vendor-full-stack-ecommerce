import { Router } from "express";
import { authentication } from "../../middlewares/authMiddleware";
import { authoraization } from "../../middlewares/authoraizationMiddleware";
import { Role } from "../../utils/enum/enum";
import { categoryController } from "../../controllers";

const routes = Router();

routes.post(
  "/create",
  authentication,
  authoraization([Role.ADMIN]),
  categoryController.store
);

export default routes;
