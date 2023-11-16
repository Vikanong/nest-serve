import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')  // 表名
export class User {

    @PrimaryGeneratedColumn() // 自增主键
    id: number;

    @Column() // 用户
    user: string;

    @Column() // 创建时间
    create_time: Date;
}