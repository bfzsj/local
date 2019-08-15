

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class user_information{
    @PrimaryGeneratedColumn()
    USER_ID:number

    @Column({length:5})
    USER_NAME:string

    @Column({length:5})
    VIP_LEVEL:string

    @Column({length:11})
    PHONE_NUMBER:string

    @Column({length:20})
    APPLE_ID:string

	@Column()
	PASSWORD:string

    @Column({length:50})
    BUSINESS_LICEBSE:string


}