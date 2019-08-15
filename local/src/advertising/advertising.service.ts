import { Injectable } from '@nestjs/common';
import {advertising} from '../entities/advertising.entity'
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";


@Injectable()
export class AdvertisingService {

    constructor(@InjectRepository(advertising) private readonly advertisingRepository:Repository<advertising>){}

    root():string{
        return "hello world"
    }

    async getAll():Promise<advertising[]>{
        return await this.advertisingRepository.find()
    }
}
