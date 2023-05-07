import { Request, Response } from "express";
import { User } from "../../entity/users/User";
import { hash } from "bcrypt";

class Controller {
  /**
   * For create a new user | Register
   * API URL => /api/v1/users/register
   * METHOD => POST
   * ADMIN | CUSTOMER | VENDOR
   */
  public static async store(req: Request, res: Response) {
    const { name, email, password, image, phone, address, role } = req.body;
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
        image,
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
   * For get all user
   * API URL => /api/v1/users/get-all
   * METHOD => GET
   * ADMIN
   */
  public static async index(_: Request, res: Response) {
    try {
      const users = await User.find({
        order: { createdAt: "DESC" },
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Sarver is not working!", error });
    }
  }

  /**
   * Get a single user using uuid
   * API URL => /api/v1/users/get-single/:uuid
   * METHOD => GET
   * ADMIN
   */
  public static async find(req: Request, res: Response) {
    const { uuid } = req.params;

    if (!uuid) return res.status(400).json({ message: "Incroccet params!" });
    try {
      const user = await User.findOneBy({
        uuid,
      });
      if (!user) return res.status(400).json({ message: "User not found!" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Sarver is not working!", error });
    }
  }
}

export default Controller;
