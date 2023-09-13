import { STATUS } from "src/constants/constants";
export declare class AuctionDto {
    seller: string;
    tokenId: string;
    displayPrice: number;
    actualPrice: number;
    status: STATUS.STATUS_OPEN;
    startAt: string;
    endAt: string;
}
