import {Injectable} from '@nestjs/common';
import {user_information} from "../entities/user_information.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
@Injectable()
export class UserInformationService {
    constructor(@InjectRepository(user_information) private readonly userRepository:Repository<user_information>){}

    async getAll():Promise<user_information[]>{
        return await this.userRepository.find()
    }
	
	async save(username:user_information){
	    return await this.userRepository.save(username)
	}

	async remove(username:user_information){
        return await this.userRepository.remove(username)
    }



}
