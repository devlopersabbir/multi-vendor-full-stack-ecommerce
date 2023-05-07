import { Entity, JoinTable, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Product } from "../product/Products";

@Entity("cart")
export class Cart extends Modal {
  @ManyToOne(() => User, (user) => user.carts)
  @JoinColumn({
    name: "userUuid",
    referencedColumnName: "uuid",
  })
  user: User;

  @ManyToMany(() => Product)
  @JoinTable({
    name: "cart_&_product",
    joinColumn: {
      name: "cart_uuid",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "product_uuid",
      referencedColumnName: "uuid",
    },
  })
  products: Product[];
}
