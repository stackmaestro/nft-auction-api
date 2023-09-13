"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionModule = void 0;
const common_1 = require("@nestjs/common");
const auction_controller_1 = require("./auction.controller");
const auction_service_1 = require("./auction.service");
const bull_1 = require("@nestjs/bull");
const auction_event_1 = require("./auction.event");
const auction_job_1 = require("./auction.job");
const constants_1 = require("../constants/constants");
const user_service_1 = require("../user/user.service");
let AuctionModule = class AuctionModule {
};
AuctionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueueAsync({
                name: constants_1.JOBS.NOTIFY.TITLE,
            })
        ],
        controllers: [auction_controller_1.AuctionController],
        providers: [auction_service_1.AuctionService, auction_event_1.AuctionEvent, auction_job_1.AuctionJob, user_service_1.UserService]
    })
], AuctionModule);
exports.AuctionModule = AuctionModule;
//# sourceMappingURL=auction.module.js.map