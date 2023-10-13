import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import { AppService } from './app.service';
import { dataBaseConfig } from './database/database.config';
import {BrandModule} from "./brand/brand.module";


@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}