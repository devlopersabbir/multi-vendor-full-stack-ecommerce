import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import { DataSource } from "typeorm";
import { User } from "./entity/users/User";
import { Product } from "./entity/product/Products";
import { Order } from "./entity/order/Order";
import { WishList } from "./entity/wishList/wishList";
import { Cart } from "./entity/cart/Cart";
import { Category } from "./entity/category/Category";
import { Review } from "./entity/reviews/Reviews";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Product, Order, WishList, Cart, Category, Review],
});
