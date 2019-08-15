import {Body,Controller, Get, Post, Req, Res} from '@nestjs/common';
import {ShanxilocalService} from "./shanxilocal.service";
import {shanxilocal} from "../entities/shanxilocal.entity";

@Controller('shanxilocal')
export class ShanxilocalController {
    constructor(private readonly localService:ShanxilocalService){}

    @Post("getAll")
    async getAll():Promise<shanxilocal[]>{
        return this.localService.getAll()
    }

    @Post("insert")
    async save(@Body() request:shanxilocal,@Res() res){
        if(await this.localService.save(request)){
            res.send({
                code:200,
                data:request
            })
        }else{
            res.send({
                code:300
            })
        }
    }
}
