export enum DriverType {
    /// <summary>
    /// All / any driver.
    /// </summary>
    All = -1,
  
    /// <summary>
    /// No driver.
    /// </summary>
    None = 0,
  
    /// <summary>
    /// A Gen I analog driver.
    /// </summary>
    GenI = 1,
  
    /// <summary>
    /// A Gen II analog driver.
    /// </summary>
    GenII = 2,
  
    /// <summary>
    /// Fusion driver.
    /// </summary>
    Fusion = 3,
  
    /// <summary>
    /// Sealevel I/O driver.
    /// </summary>
    SeaIo = 4,
  
    /// <summary>
    /// Sealevel Max driver.
    /// </summary>
    SeaMax = 5,
  
    /// <summary>
    /// AVI source driver.
    /// </summary>
    AviSource = 6,
  
    /// <summary>
    /// Single-image IP camera driver.
    /// </summary>
    IpSingle = 7,
  
    /// <summary>
    /// Multi-image IP camera driver.
    /// </summary>
    IpMulti = 8,
  
    /// <summary>
    /// IP encoder driver.
    /// </summary>
    IpEncoder = 9,
  
    /// <summary>
    /// NVR driver.
    /// </summary>
    IpNvr = 10,
  
    /// <summary>
    /// A CompleteView Recording Server (ProxyCast?) driver.
    /// </summary>
    RecordingServer = 11,
  
    /// <summary>
    /// IP I/O driver.
    /// </summary>
    IpIo = 12,
  
    /// <summary>
    /// Operating system driver.
    /// </summary>
    Os = 13,
  
    /// <summary>
    /// NVIDIA GPU driver.
    /// </summary>
    Nvidia = 14,
  
    /// <summary>
    /// Sentinel value.
    /// </summary>
    Max, // Add new driver types before this one.
  }