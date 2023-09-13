import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { randomBytes } from 'crypto';
import { Wallet } from 'ethers';
import { AuctionDto as AuctionDto } from './auction.dto';
import { NotifyEvent } from './auction.event';
import { EVENTS } from '../../src/constants/constants';
import { UserService } from '../../src/user/user.service';

@Injectable()
export class AuctionService {

  constructor(
    private eventEmitter: EventEmitter2,
    private userService: UserService
  ) {}

  createAuction = (dto: AuctionDto) => {
    const auction: AuctionDto = dto;
    const users = this.userService.get()
    const subscribers = users.filter(user => user.subscribed.includes(auction.tokenId))
    this.eventEmitter.emit(
      EVENTS.AUCTION_START,
      new NotifyEvent({
        users: subscribers,
        auction
      }),
    );
  }
}