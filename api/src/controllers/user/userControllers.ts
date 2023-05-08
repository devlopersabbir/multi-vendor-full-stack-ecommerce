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
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password is requeired!" });
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
      console.log(error);
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
   * ADMIN | VENDOR | CUSTOMER
   */
  public static async get(req: Request, res: Response) {
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
  /**
   * Update account
   * API URL => /api/v1/users/update/:uuid
   * METHOD => PUT
   * ADMIN | VENDOR | CUSTOMER
   */
  public static async update(req: Request, res: Response) {
    const { uuid } = req.params;
    const { name, email, password, role, image, phone, address } = req.body;
    if (!uuid) return res.status(400).json({ message: "Invalid params!" });

    const user = await User.findOneByOrFail({ uuid });
    if (!user) return res.status(404).json({ message: "User not found!" });

    if (req.user?.role !== "ADMIN" && req.user?.uuid !== user?.uuid)
      return res
        .status(400)
        .json({ message: "You are not woner for this account!" });
    try {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password ? await hash(password, 11) : user.password;
      user.phone = phone || user.phone;
      user.address = address || user.address;
      user.image = image || user.image;
      user.role = role || user.role;

      await user.save();
      res.status(200).json({ message: "User updated!" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
}

export default Controller;
