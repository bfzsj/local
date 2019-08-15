import { Module } from '@nestjs/common';
import { ShanxilocalService } from './shanxilocal.service';
import { ShanxilocalController } from './shanxilocal.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {shanxilocal} from "../entities/shanxilocal.entity";

@Module({
  imports: [TypeOrmModule.forFeature([shanxilocal])],
  providers: [ShanxilocalService],
  controllers: [ShanxilocalController]
})
export class ShanxilocalModule {}
