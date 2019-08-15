import { Module } from '@nestjs/common';
import { ModularService } from './modular.service';
import { ModularController } from './modular.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {modular} from "../entities/modular.entity";

@Module({
    imports: [TypeOrmModule.forFeature([modular])],
  providers: [ModularService],
  controllers: [ModularController]
})
export class ModularModule {}
