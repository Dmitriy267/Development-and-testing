import { Module } from '@nestjs/common';
import {CarsCategoriesController} from './carscategories.controller';
import {CarsCategoriesService} from './carscategories.service';

@Module({
  controllers: [CarsCategoriesController],
  providers: [CarsCategoriesService],
})
export class CarsCategoriesModule {}