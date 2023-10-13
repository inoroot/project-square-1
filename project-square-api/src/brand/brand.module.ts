import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BrandsService } from './brand.service';
import { BrandController } from './brand.controller';
import {Brand} from "./entities/brand.entity";
import {BrandSeedDataService} from "./seed-data/brand-seed-data.service";

@Module({
  imports: [SequelizeModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandSeedDataService, BrandsService]
})
export class BrandModule {}
