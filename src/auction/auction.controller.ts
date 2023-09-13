import { Body, Controller, Post } from '@nestjs/common';
import { AuctionDto } from './auction.dto';
import { AuctionService } from './auction.service';
import { MESSAGES } from '../../src/constants/constants';

@Controller('auction')
export class AuctionController {
  constructor(private auctionService: AuctionService) {}

  @Post('create')
  create(@Body() dto: AuctionDto): string {
    this.auctionService.createAuction(dto)
    return MESSAGES.AUCTION_CREATED;
  }
}