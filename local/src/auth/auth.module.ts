import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import { JwtStrategy } from './jwt.strategy'
import {user_information} from "../entities/user_information.entity";


@Module({
    imports: [TypeOrmModule.forFeature([user_information])],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {

}