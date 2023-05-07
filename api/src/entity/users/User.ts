import { Column, Entity, OneToMany } from "typeorm";
import Modal from "../Modal";
import { Role } from "../../utils/enum/enum";
import { Product } from "../product/Products";
import { WishList } from "../wishList/wishList";
import { Order } from "../order/Order";
import { Cart } from "../cart/Cart";
import { Review } from "../reviews/Reviews";

@Entity("user")
export class User extends Modal {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ unique: true, nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: "enum", enum: Role, default: Role.CUSTOMER })
  role?: string;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @OneToMany(() => WishList, (wishlist) => wishlist.user)
  wishList: WishList[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
