export type UserAgentBrowser =
  | 'Chrome'
  | 'Dolphin'
  | 'Edge'
  | 'Firefox'
  | 'IE'
  | 'MI'
  | 'Opera'
  | 'OperaMini'
  | 'Safari'
  | 'WindowsPhone'
  | 'Yandex'
  | 'Unknown'

export type UserAgentEngine =
  | 'Gecko'
  | 'WebKit'
  | 'Presto'
  | 'Trident'
  | 'Blink'
  | 'Unknown'

export type UserAgentOperatingSystem =
  | 'Android'
  | 'iOS'
  | 'Linux'
  | 'MacOS'
  | 'Pardus'
  | 'Windows'
  | 'Unknown'

export type UserAgentDevice = 'Mobile' | 'Tablet' | 'Computer' | 'Unknown'
