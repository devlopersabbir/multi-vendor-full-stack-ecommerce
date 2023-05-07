import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Product } from "../product/Products";

@Entity("wishList")
export class WishList extends Modal {
  @ManyToOne(() => User, (user) => user.wishList)
  @JoinColumn({
    name: "userUuid",
    referencedColumnName: "uuid",
  })
  user: User;

  @ManyToMany(() => Product)
  @JoinTable({
    name: "wishList_&_product",
    joinColumn: {
      name: "wish_uuid",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "product_uuid",
      referencedColumnName: "uuid",
    },
  })
  products: Product[];
}
