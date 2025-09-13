export enum Position {
  FWD = 'FWD',
  DEF = 'DEF',
  G = 'G',
}

export enum Handedness {
  L = 'L',
  R = 'R',
}

export enum Country {
  USA = 'USA',
  CAN = 'CAN',
  SWE = 'SWE',
  FIN = 'FIN',
  GER = 'GER',
  RUS = 'RUS',
  SUI = 'SUI',
  CZE = 'CZE',
}

export enum TeamAbb {
  PIT = 'PIT',
  WSH = 'WSH',
  PHL = 'PHL',
  TOR = 'TOR',
  TBL = 'TBL',
  FLA = 'FLA',
  EDM = 'EDM',
  VGK = 'VGK',
  NYR = 'NYR',
  BOS = 'BOS',
  CHI = 'CHI',
  LAK = 'LAK',
  VAN = 'VAN',
  CGY = 'CGY',
  PHI = 'PHI',
  DAL = 'DAL',
  MTL = 'MTL',
  OTT = 'OTT',
  NJD = 'NJD',
  WPG = 'WPG',
  SJS = 'SJS',
  NSH = 'NSH',
  MIN = 'MIN',
  BUF = 'BUF',
  STL = 'STL',
  ANA = 'ANA',
  COL = 'COL',
  DET = 'DET',
  UTA = 'UTA',
  FA = 'FA',
}

export interface Player {
  name: string;
  handedness: Handedness;
  overall: number;
  salary: number;
  country: Country;
  team: TeamAbb;
  position: Position;
}

export const DEFAULT_PLAYER: Player = {
  name: 'DEFAULT',
  country: Country.CAN,
  handedness: Handedness.L,
  overall: 0,
  position: Position.FWD,
  salary: 0,
  team: TeamAbb.FA,
}
