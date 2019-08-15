import { Module } from '@nestjs/common';
import { AdvertisingController } from './advertising.controller';
import { AdvertisingService } from './advertising.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {advertising} from "src/entities/advertising.entity";


@Module({
  imports: [TypeOrmModule.forFeature([advertising])],
  controllers: [AdvertisingController],
  providers: [AdvertisingService]
})
export class AdvertisingModule {}
