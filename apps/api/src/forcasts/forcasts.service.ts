import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

import { CreateForcastDto } from './dto/create-forcast.dto'
import { UpdateForcastDto } from './dto/update-forcast.dto'

@Injectable()
export class ForcastsService {
  constructor(private db: PrismaService) {}
  create(createForcastDto: CreateForcastDto) {
    return 'This action adds a new forcast'
  }

  async findAll() {
    const forcasts = await this.db.forecasts.findMany()
    return forcasts
  }

  async findOne(id: number) {
    return `This action returns a #${id} forcast`
  }

  async update(id: number, updateForcastDto: UpdateForcastDto) {
    return `This action updates a #${id} forcast`
  }

  async remove(id: number) {
    return `This action removes a #${id} forcast`
  }
}
