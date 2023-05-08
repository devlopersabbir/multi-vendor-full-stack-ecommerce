import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Category } from "../category/Category";
import { Review } from "../reviews/Reviews";

@Entity("products")
export class Product extends Modal {
  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column({ type: "text", nullable: false })
  shortDescription: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column()
  price: number;

  @Column({ default: 1 })
  quantity: number;

  @Column({ nullable: true, type: "simple-array" })
  images: string[];

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({
    name: "userUuid",
    referencedColumnName: "uuid",
  })
  user: User;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({
    name: "categoryUuid",
    referencedColumnName: "uuid",
  })
  category: Category;

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}
