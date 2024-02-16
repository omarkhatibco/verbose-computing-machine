import { Module } from '@nestjs/common'
import { loggingMiddleware, PrismaModule, providePrismaClientExceptionFilter } from 'nestjs-prisma'

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
  ],
  controllers: [AppController],
  providers: [AppService, providePrismaClientExceptionFilter()],
})
export class AppModule {}
