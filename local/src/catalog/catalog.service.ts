import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {catalog} from "src/entities/catalog.entity";
import {Repository} from "typeorm";

@Injectable()
export class CatalogService {
    constructor(@InjectRepository(catalog) private readonly catalogRepository:Repository<catalog>){}

    async getAll():Promise<catalog[]>{
        return await this.catalogRepository.find()
    }

    async save(local:catalog){
        return await this.catalogRepository.save(local);
    }

    async UpdateIMG(CAT_ID,CAL_PICTURE){

        return await this.catalogRepository.update({CAT_ID:CAT_ID},{CAL_PICTURE:CAL_PICTURE});
    }

    async findOne(CAR_ID){
        return await this.catalogRepository.findOne({CAT_ID:CAR_ID})
    }

    async remove(CAT_ID:catalog){
        return await this.catalogRepository.remove(CAT_ID)
    }

    async update(CAT:catalog){
        return await this.catalogRepository.update({CAT_ID:CAT.CAT_ID},{CAT_NAME:CAT.CAT_NAME,CAT_SUMMARY:CAT.CAT_SUMMARY})
    }
}
