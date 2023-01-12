export interface IDoNotContact {
  /** Controls if user allows messages to be sent to them out of app. EG: email, sms, etc. */
  doNotContact: boolean;
  /** Access code to control contact settings. Should be presented in *all* emails sent to user. */
  accessCode: string;
}
