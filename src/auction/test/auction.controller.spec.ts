import { Test, TestingModule } from '@nestjs/testing';
import { AuctionController } from '../auction.controller';
import { AuctionService } from '../auction.service';
import { BullModule } from '@nestjs/bull';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuctionModule } from '../auction.module';
import { UserModule } from '../../../src/user/user.module';

describe('AuctionController', () => {
  let controller: AuctionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AuctionModule,
        UserModule,
        EventEmitterModule.forRoot({
          wildcard: false,
          delimiter: '.',
          newListener: false,
          removeListener: false,
          maxListeners: 1000,
          verboseMemoryLeak: false,
          ignoreErrors: false,
        }),
        BullModule.forRoot({
          redis: {
            host: 'localhost',
            port: 5003,
          },
        }),
        BullModule.registerQueueAsync({
          name: 'notify',
        })
      ],
      controllers: [AuctionController],
      providers: [AuctionService,AuctionModule,UserModule],
    }).compile();

    controller = module.get<AuctionController>(AuctionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
