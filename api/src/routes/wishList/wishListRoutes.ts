import {Router} from "express";
import { authentication } from "../../middlewares/authMiddleware";
import { authoraization } from "../../middlewares/authoraizationMiddleware";
import { Role } from "../../utils/enum/enum";

const routes = Router();

routes.post("/create", authentication, authoraization([Role.ADMIN, Role.CUSTOMER, Role.VENDOR]))

export default routes;