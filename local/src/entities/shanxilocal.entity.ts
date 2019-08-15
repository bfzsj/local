

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class shanxilocal{
    @PrimaryGeneratedColumn()
    LOCAL_ID:number

    @Column({length:10})
    COUNTY:string

    @Column({length:10})
    CITY:string



}