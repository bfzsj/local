

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class advertising{
    @PrimaryGeneratedColumn()
    ADVE_ID:number

    @Column()
    USER_ID:number

    @Column({length:20})
    ADVE_LOCATION:string

    @Column({length:50})
    PICTURE_PATH:string

    @Column({length:200})
    CONTENT:string

    @Column({length:16})
    type:string

    @Column()
    weight:number

}