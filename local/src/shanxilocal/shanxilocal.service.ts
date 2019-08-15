import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {shanxilocal} from "../entities/shanxilocal.entity";

@Injectable()
export class ShanxilocalService {
    constructor(@InjectRepository(shanxilocal) private readonly shanxiRepository:Repository<shanxilocal>){}

    async getAll():Promise<shanxilocal[]>{
        return await this.shanxiRepository.find()
    }

    async save(local:shanxilocal){
        return await this.shanxiRepository.save(local);
    }
}
