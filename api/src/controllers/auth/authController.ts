import { Request, Response } from "express";
import { User } from "../../entity/users/User";
import { hash } from "bcrypt";

class Controller {
  /**
   * API URL => /api/v1/auth/register
   * METHOD => POST
   * ADMIN | CUSTOMER | VENDOR
   */
  public static async store(req: Request, res: Response) {
    const { name, email, password, phone, address, role } = req.body;
    const isUser = await User.findOneBy({
      email,
    });
    if (isUser) return res.status(400).json({ message: "Email already used!" });
    const bcryptPassword = await hash(password, 11);
    if (!bcryptPassword)
      return res.status(500).json({ message: "Fail to hash password!" });

    try {
      const user = User.create({
        name,
        email,
        password: bcryptPassword,
        phone,
        address,
        role,
      });
      await user.save();
      res.status(201).json({ message: "Account created successfull!" });
    } catch (error) {
      res.status(500).json({ message: "Sarver is not working!", error });
    }
  }

  /**
   * API URL => /api/v1/auth/register
   * METHOD => POST
   * ADMIN | CUSTOMER | VENDOR
   */
  public static async get(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Sarver is not working!", error });
    }
  }
}

export default Controller;
