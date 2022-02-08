import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;

  /* @Column({ type:"boolean", default: false })
  isDeleted!: boolean; */

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
}
