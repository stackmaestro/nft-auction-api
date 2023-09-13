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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const crypto_1 = require("crypto");
const ethers_1 = require("ethers");
const auction_event_1 = require("./auction.event");
const constants_1 = require("../constants/constants");
const user_service_1 = require("../user/user.service");
let AuctionService = class AuctionService {
    constructor(eventEmitter, userService) {
        this.eventEmitter = eventEmitter;
        this.userService = userService;
        this.createAddress = () => {
            var id = (0, crypto_1.randomBytes)(32).toString('hex');
            var privateKey = "0x" + id;
            var wallet = new ethers_1.Wallet(privateKey);
            console.log("Address: " + wallet.address);
        };
        this.createAuction = (dto) => {
            const auction = dto;
            const users = this.userService.get();
            const subscribers = users.filter(user => user.subscribed.includes(auction.tokenId));
            this.eventEmitter.emit(constants_1.EVENTS.AUCTION_START, new auction_event_1.NotifyEvent({
                users: subscribers,
                auction
            }));
        };
    }
};
AuctionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2,
        user_service_1.UserService])
], AuctionService);
exports.AuctionService = AuctionService;
//# sourceMappingURL=auction.service.js.map