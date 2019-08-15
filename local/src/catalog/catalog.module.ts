import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {catalog} from "src/entities/catalog.entity";

@Module({
  imports: [TypeOrmModule.forFeature([catalog])],
  providers: [CatalogService],
  controllers: [CatalogController]
})
export class CatalogModule {}
