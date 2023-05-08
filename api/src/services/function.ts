import { Response } from "express";
import { User } from "../entity/users/User";
import { JwtPayload } from "jsonwebtoken";
import JWT from "./jwt";

export const sendResponseWithJwt = (
  res: Response,
  user: User,
  message: string
) => {
  const payload: JwtPayload = {
    id: user.id,
    uuid: user.uuid,
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone,
    address: user.address,
  };

  const accessToken = JWT.generateAccessToken(payload);
  const refreshToken = JWT.generateRefreshToken(payload);

  res.cookie("token", refreshToken, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
  });

  res.status(200).json({
    message,
    accessToken,
    user,
  });
};
