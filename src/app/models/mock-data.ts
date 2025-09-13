import {Country, DEFAULT_PLAYER, Handedness, Player, Position, TeamAbb} from './players';
import {Team} from './teams';


export const mockPlayerData: Player[] = [
  { name: 'Connor McDavid', handedness: Handedness.L, overall: 97, salary: 12_500_000, country: Country.CAN, team: TeamAbb.EDM, position: Position.FWD },
  { name: 'Auston Matthews', handedness: Handedness.R, overall: 95, salary: 11_600_000, country: Country.USA, team: TeamAbb.TOR, position: Position.FWD },
  { name: 'Leon Draisaitl', handedness: Handedness.L, overall: 94, salary: 11_000_000, country: Country.GER, team: TeamAbb.EDM, position: Position.FWD },
  { name: 'Cale Makar', handedness: Handedness.R, overall: 96, salary: 9_000_000, country: Country.CAN, team: TeamAbb.COL, position: Position.DEF },
  { name: 'Igor Shesterkin', handedness: Handedness.L, overall: 92, salary: 6_500_000, country: Country.RUS, team: TeamAbb.NYR, position: Position.G },

  // 🔹 Forwards
  {name: 'Connor Hayes', handedness: Handedness.L, overall: 85, salary: 5_000_000, country: Country.CAN, team: TeamAbb.TOR, position: Position.FWD},
  {name: 'Logan Mitchell', handedness: Handedness.R, overall: 87, salary: 6_000_000, country: Country.USA, team: TeamAbb.NYR, position: Position.FWD},
  {name: 'Elias Bergström', handedness: Handedness.R, overall: 84, salary: 5_200_000, country: Country.SWE, team: TeamAbb.BOS, position: Position.FWD},
  {name: 'Mikko Lehtinen', handedness: Handedness.L, overall: 82, salary: 4_800_000, country: Country.FIN, team: TeamAbb.CHI, position: Position.FWD},
  {name: 'Trevor Hughes', handedness: Handedness.R, overall: 83, salary: 5_100_000, country: Country.USA, team: TeamAbb.LAK, position: Position.FWD},
  {name: 'Nico Meier', handedness: Handedness.L, overall: 80, salary: 4_500_000, country: Country.SUI, team: TeamAbb.VAN, position: Position.FWD},
  {name: 'Ethan Clarke', handedness: Handedness.R, overall: 84, salary: 5_600_000, country: Country.CAN, team: TeamAbb.EDM, position: Position.FWD},
  {name: 'Dmitri Orlovsky', handedness: Handedness.R, overall: 81, salary: 4_700_000, country: Country.RUS, team: TeamAbb.WSH, position: Position.FWD},
  {name: 'Brady O’Connor', handedness: Handedness.L, overall: 79, salary: 4_400_000, country: Country.CAN, team: TeamAbb.CGY, position: Position.FWD},
  {name: 'Ryan Matthews', handedness: Handedness.R, overall: 82, salary: 5_300_000, country: Country.USA, team: TeamAbb.PHI, position: Position.FWD},
  {name: 'Victor Lundqvist', handedness: Handedness.R, overall: 80, salary: 4_600_000, country: Country.SWE, team: TeamAbb.DAL, position: Position.FWD},
  {name: 'Jakub Novak', handedness: Handedness.L, overall: 78, salary: 3_800_000, country: Country.CZE, team: TeamAbb.OTT, position: Position.FWD},
  {name: 'Cole Anderson', handedness: Handedness.L, overall: 81, salary: 4_200_000, country: Country.USA, team: TeamAbb.NJD, position: Position.FWD},
  {name: 'Tyler Morgan', handedness: Handedness.R, overall: 83, salary: 4_900_000, country: Country.CAN, team: TeamAbb.WPG, position: Position.FWD},
  {name: 'Joonas Rantanen', handedness: Handedness.R, overall: 77, salary: 3_600_000, country: Country.FIN, team: TeamAbb.SJS, position: Position.FWD},
  {name: 'Sergei Volkov', handedness: Handedness.R, overall: 80, salary: 4_100_000, country: Country.RUS, team: TeamAbb.NSH, position: Position.FWD},
  {name: 'Liam Davidson', handedness: Handedness.L, overall: 82, salary: 4_700_000, country: Country.CAN, team: TeamAbb.CGY, position: Position.FWD},
  {name: 'Filip Eriksson', handedness: Handedness.L, overall: 79, salary: 4_000_000, country: Country.SWE, team: TeamAbb.MIN, position: Position.FWD},
  {name: 'Radek Zelenka', handedness: Handedness.R, overall: 83, salary: 5_200_000, country: Country.CZE, team: TeamAbb.BUF, position: Position.FWD},
  {name: 'Chase Bennett', handedness: Handedness.R, overall: 84, salary: 5_400_000, country: Country.USA, team: TeamAbb.STL, position: Position.FWD},
  {name: 'Noah Carter', handedness: Handedness.R, overall: 76, salary: 3_400_000, country: Country.CAN, team: TeamAbb.ANA, position: Position.FWD},
  {name: 'Roman Hischier', handedness: Handedness.L, overall: 82, salary: 4_800_000, country: Country.SUI, team: TeamAbb.FLA, position: Position.FWD},

  // 🔹 Defense
  {name: 'Alex Fraser', handedness: Handedness.L, overall: 85, salary: 5_500_000, country: Country.CAN, team: TeamAbb.TOR, position: Position.DEF},
  {name: 'Chris Johnson', handedness: Handedness.R, overall: 86, salary: 5_700_000, country: Country.USA, team: TeamAbb.NYR, position: Position.DEF},
  {name: 'Jonas Lindholm', handedness: Handedness.L, overall: 83, salary: 5_200_000, country: Country.SWE, team: TeamAbb.BOS, position: Position.DEF},
  {name: 'Teemu Väisänen', handedness: Handedness.R, overall: 84, salary: 5_300_000, country: Country.FIN, team: TeamAbb.CHI, position: Position.DEF},
  {name: 'Nathan Roy', handedness: Handedness.L, overall: 81, salary: 5_000_000, country: Country.CAN, team: TeamAbb.MTL, position: Position.DEF},
  {name: 'Dylan Parker', handedness: Handedness.R, overall: 82, salary: 5_100_000, country: Country.USA, team: TeamAbb.LAK, position: Position.DEF},
  {name: 'Oliver Karlsson', handedness: Handedness.L, overall: 80, salary: 4_500_000, country: Country.SWE, team: TeamAbb.COL, position: Position.DEF},
  {name: 'Brandon McKenzie', handedness: Handedness.R, overall: 79, salary: 4_100_000, country: Country.CAN, team: TeamAbb.NSH, position: Position.DEF},
  {name: 'Luke Harrison', handedness: Handedness.L, overall: 82, salary: 4_900_000, country: Country.USA, team: TeamAbb.WPG, position: Position.DEF},
  {name: 'Tomas Kolar', handedness: Handedness.R, overall: 83, salary: 5_300_000, country: Country.CZE, team: TeamAbb.SJS, position: Position.DEF},
  {name: 'Marc Dupuis', handedness: Handedness.L, overall: 78, salary: 3_900_000, country: Country.CAN, team: TeamAbb.OTT, position: Position.DEF},
  {name: 'Lukas Steiner', handedness: Handedness.R, overall: 81, salary: 4_600_000, country: Country.SUI, team: TeamAbb.PIT, position: Position.DEF},
  {name: 'Andrei Petrov', handedness: Handedness.L, overall: 84, salary: 5_500_000, country: Country.RUS, team: TeamAbb.DET, position: Position.DEF},
  {name: 'Connor Walsh', handedness: Handedness.R, overall: 77, salary: 3_700_000, country: Country.CAN, team: TeamAbb.UTA, position: Position.DEF},

  // 🔹 Goalies
  {name: 'Matthew Delaurier', handedness: Handedness.L, overall: 88, salary: 6_000_000, country: Country.CAN, team: TeamAbb.EDM, position: Position.G},
  {name: 'Lukas Müller', handedness: Handedness.R, overall: 85, salary: 5_500_000, country: Country.SUI, team: TeamAbb.VAN, position: Position.G},
  {name: 'Jack Thompson', handedness: Handedness.L, overall: 83, salary: 4_800_000, country: Country.USA, team: TeamAbb.NJD, position: Position.G},
  {name: 'Kalle Koskinen', handedness: Handedness.R, overall: 80, salary: 4_200_000, country: Country.FIN, team: TeamAbb.MIN, position: Position.G},
  {name: 'Colton Fraser', handedness: Handedness.L, overall: 84, salary: 5_100_000, country: Country.CAN, team: TeamAbb.CGY, position: Position.G},
  {name: 'Marek Svoboda', handedness: Handedness.R, overall: 79, salary: 3_900_000, country: Country.CZE, team: TeamAbb.NSH, position: Position.G},
  {name: 'Henrik Söderberg', handedness: Handedness.L, overall: 82, salary: 4_500_000, country: Country.SWE, team: TeamAbb.COL, position: Position.G},
];


export const mockForwards: Player[] = [
  mockPlayerData[0], // McDavid
  mockPlayerData[1], // Matthews
  mockPlayerData[2], // Draisaitl
  DEFAULT_PLAYER,    // empty slot
  mockPlayerData.find(p => p.position === Position.FWD && p.team === TeamAbb.ANA)!,
  DEFAULT_PLAYER,
  mockPlayerData.find(p => p.position === Position.FWD && p.team === TeamAbb.NYR)!,
  DEFAULT_PLAYER,
  mockPlayerData.find(p => p.position === Position.FWD && p.team === TeamAbb.TOR)!,
  mockPlayerData.find(p => p.position === Position.FWD && p.team === TeamAbb.CHI)!,
  mockPlayerData.find(p => p.position === Position.FWD && p.team === TeamAbb.BOS)!,
  mockPlayerData.find(p => p.position === Position.FWD && p.team === TeamAbb.WSH)!,
];

export const mockDefense: Player[] = [
  mockPlayerData.find(p => p.name === 'Cale Makar')!,
  mockPlayerData.find(p => p.position === Position.DEF && p.team === TeamAbb.NYR)!,
  mockPlayerData.find(p => p.position === Position.DEF && p.team === TeamAbb.LAK)!,
  mockPlayerData.find(p => p.position === Position.DEF && p.team === TeamAbb.WPG)!,
  mockPlayerData.find(p => p.position === Position.DEF && p.team === TeamAbb.TOR)!,
  DEFAULT_PLAYER,
];

export const mockGoalies: Player[] = [
  mockPlayerData.find(p => p.name === 'Igor Shesterkin')!,
  DEFAULT_PLAYER,
];


export const mockTeam: Team = {
  forwards: mockForwards,
  defense: mockDefense,
  goalies: mockGoalies
}
