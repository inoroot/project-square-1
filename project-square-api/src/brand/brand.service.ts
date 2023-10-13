import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {Brand} from "./entities/brand.entity";
import {CreateBrandDto} from "./dto/create-brand.dto";
import {BrandFilterOptions} from "./dto/filter-args.dto";
import {Op, OrderItem} from "sequelize";

@Injectable()
export class BrandsService {
  constructor(
      @InjectModel(Brand)
      private brandRepository: typeof Brand,
  ) {
  }

  create(createBrandDto: CreateBrandDto) {
    return this.brandRepository.create(createBrandDto as any);
  }

  findAll(filterOptions: BrandFilterOptions): Promise<Brand[]> {
    const published = filterOptions.filter.published.toString() == 'true' ? 1: 0;
    return this.brandRepository.findAll({ where: { published: published }, order: [[filterOptions.sort.sortField, filterOptions.sort.sortOrder]] });
  }
}