import { Router } from "express";
import { fileUploadController } from "../../controllers";

const routes = Router();

routes.post("/uploads", fileUploadController.upload);

export default routes;
