import { Controller, Get } from '@nestjs/common';
import { cityEntity } from './class/city.entity';
import { CityService } from './city.service';
import { get } from 'http';
@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async getAllCitys(): Promise<cityEntity[]> {
    return await this.cityService.findAllCitys();
  }
}
