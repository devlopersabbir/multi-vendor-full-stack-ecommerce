import { Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Product } from "../product/Products";

@Entity("wishList")
export class WishList extends Modal {
  @ManyToOne(() => User, (user) => user.wishList)
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
