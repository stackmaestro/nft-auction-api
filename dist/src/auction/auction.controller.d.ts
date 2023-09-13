import { AuctionDto } from './auction.dto';
import { AuctionService } from './auction.service';
export declare class AuctionController {
    private auctionService;
    constructor(auctionService: AuctionService);
    create(dto: AuctionDto): string;
}
