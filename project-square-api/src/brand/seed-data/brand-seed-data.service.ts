import {Injectable} from '@nestjs/common';
import {brandsSeedData} from "./data";
import {Brand} from "../entities/brand.entity";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class BrandSeedDataService {

    constructor(
        @InjectModel(Brand)
        private brandRepository: typeof Brand,
    ) {
    }

    public insertBrandsSeedData = async () => {
        const brands = brandsSeedData;
        const hasExistingData = await this.brandRepository.findAll();
        if(hasExistingData.length > 0) {
            return;
        }
       return this.brandRepository.bulkCreate(brands as any)
    }
}