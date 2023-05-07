import { Request, Response } from "express";
import { User } from "../../entity/users/User";
import { compare } from "bcrypt";
import { sendResponseWithJwt } from "../../services/function";
import { JwtPayload, verify } from "jsonwebtoken";
import JWT from "../../services/jwt";

class Controller {
  /**
   * For Login
   * API URL => /api/v1/auth/login
   * METHOD => POST
   * ADMIN | CUSTOMER | VENDOR
   */
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email & Password Required!" });

    try {
      const user = await User.findOneBy({ email });
      if (!user) return res.status(404).json({ message: "Wrong email!" });
      const isPassMatch = await compare(password, user.password);
      if (!isPassMatch)
        return res.status(400).json({ message: "Wrong password!" });

      sendResponseWithJwt(res, user, `Welcome ${user.name}`);
    } catch (error) {
      res.status(500).json({ message: "Server not responding..." });
    }
  }

  /**
   * For Logout
   * API URL => /api/v1/auth/logout
   * METHOD => POST
   * ADMIN | CUSTOMER | VENDOR
   */
  public static async logout(req: Request, res: Response) {
    if (!req.cookies?.token)
      return res.status(204).json({ message: "Sesssion expaire!" });

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).json({ message: "You are logged out" });
  }

  /**
   * Generate a refresh token
   * API URL => /api/v1/auth/refresh-token
   * METHOD => GET
   * ADMIN | CUSTOMER | VENDOR
   */
  public static async refresh(req: Request, res: Response) {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    try {
      verify(
        token,
        process.env.REFRESH_TOKEN_SECRET as string,
        async (error: any, decoded: any) => {
          if (error) return res.status(403).json({ message: "Forbidden" });
          const user = await User.findOneByOrFail({
            uuid: decoded?.uuid,
          });
          if (!user) return res.status(401).json({ message: "Unauthorized" });

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
          if (!accessToken)
            return res
              .status(400)
              .json({ message: "Fail to generate access token!" });

          res.json({ accessToken, user });
        }
      );
    } catch (error) {
      res.status(500).json({ message: "Operation fail" });
    }
  }
}

export default Controller;
