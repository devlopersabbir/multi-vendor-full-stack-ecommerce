import { Router } from "express";

const routes = Router();

routes.put("/update", (req, res) => {
  res.send("api working");
});

export default routes;
