import { Module } from '@nestjs/common';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';
import { BullModule } from '@nestjs/bull';
import { AuctionEvent } from './auction.event';
import { AuctionJob } from './auction.job';
import { JOBS } from '../../src/constants/constants';
import { UserModule } from '../../src/user/user.module';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: JOBS.NOTIFY.TITLE,
    }),
    UserModule
  ],
  controllers: [AuctionController],
  providers: [AuctionService, AuctionEvent, AuctionJob, UserModule]
})
export class AuctionModule {}
