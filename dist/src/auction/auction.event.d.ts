import { Queue } from "bull";
import { Auction } from "src/interfaces/auction.interface";
import { User } from "src/interfaces/user.interface";
export declare class NotifyEvent {
    users: User[];
    auction: Auction[];
    constructor(data: any);
}
export declare class AuctionEvent {
    private notifyQueue?;
    constructor(notifyQueue?: Queue);
    handleAuctionCreatedEvent(payload: NotifyEvent): Promise<void>;
}
