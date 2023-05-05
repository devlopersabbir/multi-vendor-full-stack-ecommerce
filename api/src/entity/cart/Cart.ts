import { Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Product } from "../product/Products";

@Entity("cart")
export class Cart extends Modal {
  @ManyToOne(() => User, (user) => user.carts)
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
