import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import Modal from "../Modal";
import { User } from "../users/User";
import { Product } from "../product/Products";
import { OrderStatus } from "../../utils/enum/enum";

@Entity("order")
export class Order extends Modal {
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({
    name: "userUuid",
    referencedColumnName: "uuid",
  })
  user: User;

  @ManyToMany(() => Product)
  @JoinTable({
    name: "product_&_order",
    joinColumn: {
      name: "product_uuid",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "order_uuid",
      referencedColumnName: "uuid",
    },
  })
  products: Product[];

  @Column({ type: "enum", enum: OrderStatus, default: OrderStatus.PROCESSING })
  status: string;

  @Column()
  totalOrders: number;

  @Column()
  totalPrice: number;

  @Column()
  totalRevenue: number;
}
