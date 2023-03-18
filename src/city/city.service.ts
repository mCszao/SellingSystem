import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cityEntity } from './class/city.entity';
@Injectable()
export class CityService {
  constructor(
    @InjectRepository(cityEntity)
    private readonly cityRepository: Repository<cityEntity>
  ) {}
  async findAllCitys(): Promise<cityEntity[]> {
    return await this.cityRepository.find();
  }
}
