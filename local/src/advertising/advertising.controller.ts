import {Controller, Get} from '@nestjs/common';
import {AdvertisingService} from "./advertising.service";
import {advertising} from "src/entities/advertising.entity";

@Controller('advertising')
export class AdvertisingController {
    constructor(private readonly advertisingService:AdvertisingService) {

    }
    @Get()
    root():string{
        return this.advertisingService.root();
    }
    @Get("getAll")
    async findAll():Promise<advertising[]>{
        return this.advertisingService.getAll()
    }
}
