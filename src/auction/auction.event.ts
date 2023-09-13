import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { Queue } from "bull";
import { EVENTS, JOBS } from "../../src/constants/constants";
import { Auction } from "../../src/interfaces/auction.interface";
import { User } from "../../src/interfaces/user.interface";

export class NotifyEvent {
  users: User[]
  auction: Auction[]

  constructor(
    data,
    ) {
    this.users = data.users;
    this.auction = data.auction;
  }
}

@Injectable()
export class AuctionEvent {

  constructor(@InjectQueue(JOBS.NOTIFY.TITLE) private notifyQueue?: Queue){}

  @OnEvent(EVENTS.AUCTION_START, { async: true })
  async handleAuctionCreatedEvent(payload: NotifyEvent) {
    let statuses = []
    for (let user of payload.users) {
      const preferences = user.preferences
      for(let i=0;i<preferences.length;i++){
        const status = await this.notifyQueue.add(
          preferences[i].toLowerCase(), {
            user,
            auction: payload.auction,
          },
          { delay: 1000 }
          );
          statuses.push(status)
      }
    }
  }
}