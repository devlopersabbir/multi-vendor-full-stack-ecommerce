import { NextFunction, Request, Response } from "express";
import { Role } from "../utils/enum/enum";

export const authoraization = (role: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorize" });
    if (!role.includes(req.user?.role as Role))
      res.status(401).json({ message: "You can't able do anything!" });

    next();
  };
};
