import { EventEmitter2 } from '@nestjs/event-emitter';
import { AuctionDto as AuctionDto } from './auction.dto';
import { UserService } from 'src/user/user.service';
export declare class AuctionService {
    private eventEmitter;
    private userService;
    constructor(eventEmitter: EventEmitter2, userService: UserService);
    createAddress: () => void;
    createAuction: (dto: AuctionDto) => void;
}
