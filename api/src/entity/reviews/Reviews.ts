import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Product } from "../product/Products";

@Entity("reviews")
export class Review extends Modal {
  @Column()
  rating: number;

  @Column({ type: "text" })
  comment: string;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({
    name: "userUuid",
    referencedColumnName: "uuid",
  })
  user: User;

  @ManyToOne(() => Product, (product) => product.reviews)
  @JoinColumn({
    name: "productUuid",
    referencedColumnName: "uuid",
  })
  product: Product;
}
