import { Module } from '@nestjs/common';
import { XiaomanService } from './xiaoman.service';
import { XiaomanController } from './xiaoman.controller';

@Module({
  providers: [XiaomanService],
  controllers: [XiaomanController]
})
export class XiaomanModule {}
