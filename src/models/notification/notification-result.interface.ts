interface INotificationChannelResult {
  /** Notification sent success state */
  isSuccess?: boolean;
  /** Array of message ids. For each sent notification out-of-app (EG: email), a message id is created and appended here. */
  messageIds?: string[];
}
/** State of out-of-app notification.*/
interface INotificationOutboundResult {
  /** Email notification result state */
  email?: INotificationChannelResult;
  /** SMS notification result state */
  sms?: INotificationChannelResult;
  /** Mobile notification result state */
  mobile?: INotificationChannelResult;
}
/** State of out-of-app notification to internal salient teams */
interface INotificationInternalResult {
  /** Notification result state to sales team */
  sale?: INotificationChannelResult;
  /** Notification result state to support team */
  support?: INotificationChannelResult;
  /** Notification result state to engineering team */
  engineering?: INotificationChannelResult;
}

export {
  INotificationChannelResult,
  INotificationOutboundResult,
  INotificationInternalResult,
};
