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
routes.get(
  "/get-single/:uuid",
  authentication,
  authoraization([Role.ADMIN, Role.CUSTOMER, Role.VENDOR]),
  userController.get
);
routes.put(
  "/update/:uuid",
  authentication,
  authoraization([Role.ADMIN, Role.CUSTOMER, Role.VENDOR]),
  userController.update
);

export default routes;
