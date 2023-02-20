interface IFormattedCloudWatchLogs {
  timestamp: string;
  timestampRelative: string | null;
  message: string;
  json: string | null;
}

interface ICloudWatchLogs {
  Results: Array<Array<ICloudWatchLogsResult>>; // Array of arrays of results
}

interface ICloudWatchLogsResult {
  Field: '@timestamp' | '@message' | '@ptr';
  Value: string;
}

export { IFormattedCloudWatchLogs, ICloudWatchLogs, ICloudWatchLogsResult };
