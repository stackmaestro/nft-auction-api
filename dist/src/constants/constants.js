"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.EVENTS = exports.JOBS = exports.MESSAGES = void 0;
exports.MESSAGES = {
    AUCTION_CREATED: 'Auction Created',
    MAIL_JOB_STARTED: 'Mail Job Started...',
    SMS_JOB_STARTED: 'SMS Job Started...',
    NOTIFICATION_JOB_STARTED: 'Notification Job Started...',
};
exports.JOBS = {
    NOTIFY: {
        TITLE: 'notify',
        VIA_EMAIL: 'email',
        VIA_SMS: 'sms',
        VIA_NOTIFICATION: 'notification'
    }
};
exports.EVENTS = {
    AUCTION_START: 'auctionEvent.started'
};
var STATUS;
(function (STATUS) {
    STATUS["STATUS_OPEN"] = "OPEN";
    STATUS["STATUS_CLOSE"] = "CLOSE";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
//# sourceMappingURL=constants.js.map