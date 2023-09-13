"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionEvent = exports.NotifyEvent = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const constants_1 = require("../constants/constants");
class NotifyEvent {
    constructor(data) {
        this.users = data.users;
        this.auction = data.auction;
    }
}
exports.NotifyEvent = NotifyEvent;
let AuctionEvent = class AuctionEvent {
    constructor(notifyQueue) {
        this.notifyQueue = notifyQueue;
    }
    async handleAuctionCreatedEvent(payload) {
        let statuses = [];
        for (let user of payload.users) {
            const preferences = user.preferences;
            for (let i = 0; i < preferences.length; i++) {
                const status = await this.notifyQueue.add(preferences[i].toLowerCase(), {
                    user,
                    auction: payload.auction,
                }, { delay: 1000 });
                statuses.push(status);
            }
        }
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)(constants_1.EVENTS.AUCTION_START, { async: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NotifyEvent]),
    __metadata("design:returntype", Promise)
], AuctionEvent.prototype, "handleAuctionCreatedEvent", null);
AuctionEvent = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)(constants_1.JOBS.NOTIFY.TITLE)),
    __metadata("design:paramtypes", [Object])
], AuctionEvent);
exports.AuctionEvent = AuctionEvent;
//# sourceMappingURL=auction.event.js.map