import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../entity/users/User";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    async (err: any, decoded: any) => {
      if (err) return res.status(403).json({ message: "Forbidden", err });
      const user = await User.findOneByOrFail({ uuid: decoded?.uuid });
      if (!user) return res.status(401).json({ message: "Unauthorized" });
      req.user = user;
      next();
    }
  );
};
