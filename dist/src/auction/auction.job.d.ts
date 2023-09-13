import { Job } from "bull";
export declare class AuctionJob {
    private readonly logger;
    constructor();
    mail(job: Job<unknown>): Promise<{}>;
    sms(job: Job<unknown>): Promise<{}>;
    notification(job: Job<unknown>): Promise<{}>;
    onActive(job: Job): void;
    onComplete(job: Job): void;
}
