

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class modular{
    @PrimaryGeneratedColumn()
    MOD_ID:number

    @Column({length:10})
    MOD_NAME:string

    @Column({length:50})
    UPDATE_CONENT:string

    @Column('date')
    UODATE_DATE:Date


}