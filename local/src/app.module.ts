import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisingModule } from './advertising/advertising.module';
import { CatalogModule } from './catalog/catalog.module';
import { ModularModule } from './modular/modular.module';
import { ShanxilocalModule } from './shanxilocal/shanxilocal.module';
import { UserInformationModule } from './user-information/user-information.module';
import {AuthModule} from "./auth/auth.module";




@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AdvertisingModule,
    CatalogModule,
    ModularModule,
    ShanxilocalModule,
    UserInformationModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
