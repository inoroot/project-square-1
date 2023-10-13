import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {BrandSeedDataService} from "./brand/seed-data/brand-seed-data.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   try {
       console.log('=============================================')
       console.log('Preparing to insert brands seed data')
       console.log('=============================================')
       const brandsSeedService = app.get(BrandSeedDataService);
       const seedingResponse =  await brandsSeedService.insertBrandsSeedData();
       if(seedingResponse && seedingResponse.length > 0) {
           console.log('Brands Seeding Successful!')
       }
   } catch (e) {
       console.log('Brands Seeding failed!');
   }

    app.enableCors();
    await app.listen(3000);
  console.log('Application Listening on port: 3000')
}
bootstrap();
