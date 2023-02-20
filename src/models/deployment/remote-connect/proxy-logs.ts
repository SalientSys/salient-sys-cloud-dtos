interface IFormattedProxyLog {
  timestamp: string;
  timestampRelative: string | null;
  message: string;
  json: string | null;
}

interface IProxyLog {
  Results: Array<Array<IProxyLogResult>>;
}

interface IProxyLogResult {
  Field: '@timestamp' | '@message' | '@ptr';
  Value: string;
}

export { IFormattedProxyLog, IProxyLog, IProxyLogResult };
