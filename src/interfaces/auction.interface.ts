import {STATUS} from '../constants/constants'

export interface Auction {
  seller: string;
  tokenId: string;
  displayPrice: number;
  actualPrice: number;
  status: STATUS.STATUS_OPEN;
  startAt: string;
  endAt: string;
}