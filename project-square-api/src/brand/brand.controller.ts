import {Controller, Get, Post, Body, Query} from '@nestjs/common';
import { BrandsService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import {Brand} from "./entities/brand.entity";
import {BrandFilterOptions, BrandSortField, BrandSortOrder} from "./dto/filter-args.dto";

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  findAll(@Query() query: { published: boolean, sortField: BrandSortField, sortOrder: BrandSortOrder }): Promise<Brand[]> {
    const filterOptions: BrandFilterOptions = {
      sort: { sortOrder: query.sortOrder, sortField: query.sortField },
      filter: { published: query.published }
    }

    return this.brandService.findAll(filterOptions);
  }
}
