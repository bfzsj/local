import { Module } from '@nestjs/common';
import { UserInformationService } from './user-information.service';
import { UserInformationController } from './user-information.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {user_information} from "../entities/user_information.entity";



@Module({
  imports: [TypeOrmModule.forFeature([user_information])],
  providers: [UserInformationService],
  controllers: [UserInformationController]
})
export class UserInformationModule {}
