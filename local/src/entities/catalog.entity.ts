

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class catalog{
    @PrimaryGeneratedColumn()
    CAT_ID:number

    @Column({length:20})
    CAT_NAME:string

    @Column({length:50})
    CAT_SUMMARY:string

    @Column('text')
    CAT_DETAILED:string

    @Column({length:20})
    CAL_PICTURE:string

    @Column({length:20})
    CAT_VIDEO:string

    @Column({length:10})
    CAT_DIRECTORY:string

    @Column()
    CAT_CITY:string

    @Column()
    CAT_TYPE:number


}