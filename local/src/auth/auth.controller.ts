import {Controller, Get, UseGuards, HttpStatus, HttpCode, Post, Body, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { callback } from './jwt.strategy'
import {user_information} from "../entities/user_information.entity";
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() request:user_information){
        console.log(request)
        /* return this.authService.login(params.name, params.password); */

        return this.authService.login(request.APPLE_ID, request.PASSWORD);
    }
 /*   @Post("login")
    async login(@Body() request:username,@Res() res) {
        if (await this.usernameService.findOne(request) != undefined) {
            res.send({
                code: 200,
                data: await this.usernameService.findOne(request)
            })
        }else{
            res.send({
                code:300
            })
        }
        /!* return this.usernameService.findOne(request);*!/
    }*/
    @Post('checklogin')
    /*@UseGuards(AuthGuard('jwt'))*/
    //@UseGuards(new RoleGuard(['admin']))
    public checkLogin(@Body() request:user_information) {
        console.log(request)
        let sxd=jwt.decode(request.APPLE_ID, 'secretKey')
        console.log("sxd  "+sxd)
        if(sxd==null){
            return "sxd";
        }else{
            return this.authService.findEmployeeByName(sxd.APPLE_ID)
        }

    }
}