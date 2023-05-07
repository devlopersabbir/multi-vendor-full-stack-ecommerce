import { Request, Response } from "express";
import { Category } from "../../entity/category/Category";
import slugify from "slugify";

class Controller {
  /**
   * Create a new category
   * URL => /api/v1/categorys/create
   * METHOD => POST
   * ADMIN | VENDOR
   */

  public static async store(req: Request, res: Response) {
    const { name, image } = req.body;
    if (!name)
      return res.status(400).json({ message: "Category name is required!" });

    const nameToSlug = slugify(name, {
      replacement: "-",
      lower: true,
      remove: undefined,
      strict: false,
      locale: "vi",
      trim: true,
    });

    const category = await Category.findOneBy({
      slug: nameToSlug,
    });
    if (category)
      return res.status(400).json({ message: "Category already exits" });
    try {
      const category = Category.create({
        name,
        slug: nameToSlug,
        image,
      });
      await category.save();
      res
        .status(201)
        .json({ message: "Category created successfully!", category });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again!", error });
    }
  }

  /**
   * Get all category
   * URL => /api/v1/category/get-all
   * METHOD => GET
   * ADMIN | VENDOR
   */

  public static async get(req: Request, res: Response) {
    try {
      const category = await Category.find();
      res.status(200).json(category);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again!" });
    }
  }
}

export default Controller;
