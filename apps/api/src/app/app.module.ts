import { Module } from '@nestjs/common'
import { loggingMiddleware, PrismaModule, providePrismaClientExceptionFilter } from 'nestjs-prisma'

import { ForcastsModule } from '../forcasts/forcasts.module'
import { InventoryModule } from '../inventory/inventory.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()],
      },
    }),
    ForcastsModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, providePrismaClientExceptionFilter()],
})
export class AppModule {}
