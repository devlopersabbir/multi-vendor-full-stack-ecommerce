import { sign, verify } from "jsonwebtoken";

class JWT {
  public static generateAccessToken(payload: object) {
    return sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn: "10m",
    });
  }
  public static generateRefreshToken(payload: object) {
    return sign(payload, process.env.REFRESH_TOKEN_SECRET as string, {
      expiresIn: "1d",
    });
  }
  public static verifyAccessToken(token: string) {
    return new Promise((resolve, reject) => {
      verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string,
        (error, decoded) => {
          if (error) return reject(error);
          resolve(decoded);
        }
      );
    });
  }
  public static generateToken(payload: object) {
    return sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn: "2m",
    });
  }
}
export default JWT;
