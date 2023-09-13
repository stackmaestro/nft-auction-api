import { Test, TestingModule } from '@nestjs/testing';
import { AuctionService } from '../auction.service';
import { BullModule } from '@nestjs/bull';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserModule } from '../../../src/user/user.module';
import { AuctionModule } from '../auction.module';

describe('AuctionService', () => {
  let service: AuctionService;

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
      providers: [AuctionModule,AuctionService, UserModule],
    }).compile();

    service = module.get<AuctionService>(AuctionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
