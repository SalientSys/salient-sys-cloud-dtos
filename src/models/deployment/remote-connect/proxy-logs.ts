interface IFormattedProxyLogs {
  timestamp: string;
  timestampRelative: string | null;
  message: string;
  json: string | null;
}

interface IProxyLogs {
  Results: Array<Array<IProxyLogsResult>>;
}

interface IProxyLogsResult {
  Field: '@timestamp' | '@message' | '@ptr';
  Value: string;
}

export { IFormattedProxyLogs, IProxyLogs, IProxyLogsResult };
