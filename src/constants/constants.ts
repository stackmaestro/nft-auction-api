export const MESSAGES = {
  AUCTION_CREATED: 'Auction Created',
  MAIL_JOB_STARTED: 'Mail Job Started...',
  SMS_JOB_STARTED: 'SMS Job Started...',
  NOTIFICATION_JOB_STARTED: 'Notification Job Started...',
}

export const JOBS = {
  NOTIFY: {
    TITLE: 'notify',
    VIA_EMAIL: 'email',
    VIA_SMS: 'sms',
    VIA_NOTIFICATION: 'notification'
  }
}

export const EVENTS = {
  AUCTION_START: 'auctionEvent.started'
}

export enum STATUS {
  STATUS_OPEN = 'OPEN',
  STATUS_CLOSE = 'CLOSE',
}