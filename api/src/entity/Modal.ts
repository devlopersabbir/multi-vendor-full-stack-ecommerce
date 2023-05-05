import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

export default abstract class Modal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "uuid", unique: true })
  uuid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  createUuid() {
    this.uuid = uuid();
  }
}
