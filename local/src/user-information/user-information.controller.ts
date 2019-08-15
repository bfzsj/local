import {Body,Controller, Get, Post, Req, Res} from '@nestjs/common';
import {user_information} from "../entities/user_information.entity";
import {UserInformationService} from './user-information.service'
@Controller('user-information')
export class UserInformationController {
    constructor(private readonly userService:UserInformationService){

    }

    @Post("getAll")
    async getAll():Promise<user_information[]>{
        return this.userService.getAll()
    }
	
	@Post("insert")
	async save(@Body() request:user_information,@Res() res){
	    if(await this.userService.save(request)){
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
	@Post("delete")
	async remove(@Body() request:user_information){
        if(await this.userService.remove(request)){
            return true;
        }else{
            return false
        }
    }
}
