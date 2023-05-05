import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Category } from "../category/Category";
import { Review } from "../reviews/Reviews";

@Entity("products")
export class Product extends Modal {
  @Column({ unique: true })
  name: string;

  @Column({ type: "text", nullable: false })
  shortDescription: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column()
  price: number;

  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}
