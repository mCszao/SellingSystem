import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { cityEntity } from './class/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([cityEntity])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
