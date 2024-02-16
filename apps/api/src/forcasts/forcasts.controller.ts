import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

import { CreateForcastDto } from './dto/create-forcast.dto'
import { UpdateForcastDto } from './dto/update-forcast.dto'
import { ForcastsService } from './forcasts.service'

@Controller('forcasts')
export class ForcastsController {
  constructor(private readonly forcastsService: ForcastsService) {}

  @Post()
  create(@Body() createForcastDto: CreateForcastDto) {
    return this.forcastsService.create(createForcastDto)
  }

  @Get()
  findAll() {
    return this.forcastsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forcastsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForcastDto: UpdateForcastDto) {
    return this.forcastsService.update(+id, updateForcastDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forcastsService.remove(+id)
  }
}
