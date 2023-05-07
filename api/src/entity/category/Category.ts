import { Column, Entity, OneToMany } from "typeorm";
import Modal from "../Modal";
import { Product } from "../product/Products";

@Entity("category")
export class Category extends Modal {
  @Column({ nullable: false })
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
