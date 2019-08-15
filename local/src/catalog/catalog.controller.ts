import {Body, Controller, FileInterceptor, Post, Res, UseInterceptors, UploadedFile} from '@nestjs/common';
import {CatalogService} from "./catalog.service";
import {catalog} from "../entities/catalog.entity";
import {join} from "path";
import {createWriteStream} from "fs";

@Controller('catalog')
export class CatalogController {
    constructor(private readonly catalogService:CatalogService){}

    @Post("getAll")
    async getAll():Promise<catalog[]>{

        return this.catalogService.getAll()
    }

    @Post("insert")
    async save(@Body() request:catalog,@Res() res){
        if(await this.catalogService.save(request)){
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

    @Post('uploadIMG')
    @UseInterceptors(FileInterceptor('file'))
    async UploadedFile(@UploadedFile() file,@Body() body){
        console.log(file)
        console.log(body.index)
        this.catalogService.UpdateIMG(body.index,body.src+body.index+file.originalname+",")
        const writeImage=createWriteStream(join(__dirname,'../..','public/img',`${body.index+file.originalname}`))

        writeImage.write(file.buffer)
        return this.catalogService.findOne(body.index);
    }

    @Post("delete")
    async remove(@Body() request:catalog){
        if(await this.catalogService.remove(request)){
            return true;
        }else{
            return false
        }
    }

    @Post("update")
    async update(@Body() request:catalog){
        this.catalogService.update(request);
        return this.catalogService.findOne(request.CAT_ID);
    }
}
