import { OnQueueActive, OnQueueCompleted, Process, Processor } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Job } from "bull";
import { JOBS, MESSAGES } from "../../src/constants/constants";
import { Logger } from "@nestjs/common";

@Injectable()
@Processor(JOBS.NOTIFY.TITLE)
export class AuctionJob {
  private readonly logger: Logger

  constructor(){
    this.logger = new Logger()
  }

  @Process(JOBS.NOTIFY.VIA_EMAIL)
  async mail(job: Job<unknown>) {
    this.logger.log(MESSAGES.MAIL_JOB_STARTED)
    return {};
  }

  @Process(JOBS.NOTIFY.VIA_SMS)
  async sms(job: Job<unknown>) {
    this.logger.log(MESSAGES.SMS_JOB_STARTED)
    return {};
  }

  @Process(JOBS.NOTIFY.VIA_NOTIFICATION)
  async notification(job: Job<unknown>) {
    this.logger.log(MESSAGES.NOTIFICATION_JOB_STARTED)
    return {};
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(
      `Sending ${job.name} to ${job.data.user.name} for auction: ${job.data.auction.tokenId}...`,
    );
  }

  @OnQueueCompleted()
  onComplete(job: Job) {
    this.logger.log(
      `${job.name} has been sent to ${job.data.user.name} for auction: ${job.data.auction.tokenId}...`,
    );
  }
}