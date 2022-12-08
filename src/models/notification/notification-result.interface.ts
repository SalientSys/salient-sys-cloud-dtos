interface INotificationChannelResult {
  isSuccess?: boolean;
  messageIds?: string[];
}

interface INotificationOutboundResult {
  email?: INotificationChannelResult;
  sms?: INotificationChannelResult;
  mobile?: INotificationChannelResult;
}

interface INotificationInternalResult {
  sale?: INotificationChannelResult;
  support?: INotificationChannelResult;
  engineering?: INotificationChannelResult;
}

export {
  INotificationChannelResult,
  INotificationOutboundResult,
  INotificationInternalResult,
};
