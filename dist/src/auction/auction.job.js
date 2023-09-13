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
exports.AuctionJob = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants/constants");
const common_2 = require("@nestjs/common");
let AuctionJob = class AuctionJob {
    constructor() {
        this.logger = new common_2.Logger();
    }
    async mail(job) {
        this.logger.log(constants_1.MESSAGES.MAIL_JOB_STARTED);
        return {};
    }
    async sms(job) {
        this.logger.log(constants_1.MESSAGES.SMS_JOB_STARTED);
        return {};
    }
    async notification(job) {
        this.logger.log(constants_1.MESSAGES.NOTIFICATION_JOB_STARTED);
        return {};
    }
    onActive(job) {
        this.logger.log(`Sending ${job.name} to ${job.data.user.name} for auction: ${job.data.auction.tokenId}...`);
    }
    onComplete(job) {
        this.logger.log(`${job.name} has been sent to ${job.data.user.name} for auction: ${job.data.auction.tokenId}...`);
    }
};
__decorate([
    (0, bull_1.Process)(constants_1.JOBS.NOTIFY.VIA_EMAIL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuctionJob.prototype, "mail", null);
__decorate([
    (0, bull_1.Process)(constants_1.JOBS.NOTIFY.VIA_SMS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuctionJob.prototype, "sms", null);
__decorate([
    (0, bull_1.Process)(constants_1.JOBS.NOTIFY.VIA_NOTIFICATION),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuctionJob.prototype, "notification", null);
__decorate([
    (0, bull_1.OnQueueActive)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuctionJob.prototype, "onActive", null);
__decorate([
    (0, bull_1.OnQueueCompleted)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuctionJob.prototype, "onComplete", null);
AuctionJob = __decorate([
    (0, common_1.Injectable)(),
    (0, bull_1.Processor)(constants_1.JOBS.NOTIFY.TITLE),
    __metadata("design:paramtypes", [])
], AuctionJob);
exports.AuctionJob = AuctionJob;
//# sourceMappingURL=auction.job.js.map