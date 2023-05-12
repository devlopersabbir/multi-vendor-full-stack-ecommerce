import { Request, Response } from "express";
import slugify from "slugify";
import { Product } from "../../entity/product/Products";
import { Category } from "../../entity/category/Category";

class Controller {
  /**
   * For creating a new product
   * URL =>  /api/v1/products/create
   * METHOD => POST
   */
  public static async store(req: Request, res: Response) {
    const {
      name,
      shortDescription,
      description,
      price,
      images,
      brand,
      quantity,
      categoryUuid,
    } = req.body;
    const convertNameToSlug = slugify(name, {
      replacement: "-",
      lower: true,
      remove: undefined,
      strict: false,
      locale: "vi",
      trim: true,
    });
    const category = await Category.findOneBy({ uuid: categoryUuid });
    if (!category)
      return res.status(404).json({ message: "Category not found" });

    const isProduct = await Product.findOneBy({
      name: convertNameToSlug,
    });
    if (isProduct)
      return res.status(400).json({ message: "Product name is exits!" });

    try {
      const product = Product.create({
        name,
        slug: convertNameToSlug,
        shortDescription,
        description,
        price,
        images,
        brand,
        quantity,
        category,
        user: req.user,
      });

      await product.save();
      res
        .status(201)
        .json({ message: "Product created successfully!", product });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong! please try again",
      });
    }
  }

  /**
   *
   * URI => /api/v1/products/get-all
   * METHOD => GET
   * ADMIN | VENDOR
   */

  public static async index(_: Request, res: Response) {
    try {
      const product = await Product.find({
        order: { updatedAt: "DESC" },
        relations: {
          category: true,
          reviews: true,
        },
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Server not responding!" });
    }
  }
}

export default Controller;
