import { Module } from '@nestjs/common'

import { ForcastsController } from './forcasts.controller'
import { ForcastsService } from './forcasts.service'

@Module({
  controllers: [ForcastsController],
  providers: [ForcastsService],
})
export class ForcastsModule {}
