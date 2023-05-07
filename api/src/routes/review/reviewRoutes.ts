import { Router } from "express";
import { authoraization } from "../../middlewares/authoraizationMiddleware";
import { Role } from "../../utils/enum/enum";
import { reviewController } from "../../controllers";

const routes = Router();

routes.post(
  "/create",
  authoraization,
  authoraization([Role.ADMIN, Role.VENDOR, Role.CUSTOMER]),
  reviewController.store
);

export default routes;
