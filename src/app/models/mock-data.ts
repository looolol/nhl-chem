import {Player} from './players';

export const mockForwards: (Player | null)[] = [
  {name: 'LW1', handedness: 'L', overall: 85, salary: 5_000_000, country: 'CAN', team: 'TOR', position: 'FWD'},
  {name: 'C1', handedness: 'R', overall: 87, salary: 6_000_000, country: 'USA', team: 'NYR', position: 'FWD'},
  {name: 'RW1', handedness: 'R', overall: 84, salary: 5_200_000, country: 'SWE', team: 'BOS', position: 'FWD'},
  {name: 'LW2', handedness: 'L', overall: 82, salary: 4_800_000, country: 'FIN', team: 'CHI', position: 'FWD'},
  null,
  {name: 'RW2', handedness: 'R', overall: 83, salary: 5_100_000, country: 'USA', team: 'LAK', position: 'FWD'},
  {name: 'LW3', handedness: 'L', overall: 80, salary: 4_500_000, country: 'SUI', team: 'VAN', position: 'FWD'},
  {name: 'C3', handedness: 'R', overall: 84, salary: 5_600_000, country: 'CAN', team: 'EDM', position: 'FWD'},
  {name: 'RW3', handedness: 'R', overall: 81, salary: 4_700_000, country: 'RUS', team: 'WSH', position: 'FWD'},
  {name: 'LW4', handedness: 'L', overall: 79, salary: 4_400_000, country: 'CAN', team: 'CGY', position: 'FWD'},
  {name: 'C4', handedness: 'R', overall: 82, salary: 5_300_000, country: 'USA', team: 'PHI', position: 'FWD'},
  {name: 'RW4', handedness: 'R', overall: 80, salary: 4_600_000, country: 'SWE', team: 'DAL', position: 'FWD'},
]

export const mockDefense: (Player | null)[] = [
  {name: 'LD1', handedness: 'L', overall: 85, salary: 5_500_000, country: 'CAN', team: 'TOR', position: 'DEF'},
  {name: 'RD1', handedness: 'R', overall: 86, salary: 5_700_000, country: 'USA', team: 'NYR', position: 'DEF'},
  {name: 'LD2', handedness: 'L', overall: 83, salary: 5_200_000, country: 'SWE', team: 'BOS', position: 'DEF'},
  {name: 'RD2', handedness: 'R', overall: 84, salary: 5_300_000, country: 'FIN', team: 'CHI', position: 'DEF'},
  {name: 'LD3', handedness: 'L', overall: 81, salary: 5_000_000, country: 'CAN', team: 'MTL', position: 'DEF'},
  {name: 'RD3', handedness: 'R', overall: 82, salary: 5_100_000, country: 'USA', team: 'LAK', position: 'DEF'},
];

export const mockGoalies: (Player | null)[] = [
  {name: 'G1', handedness: 'L', overall: 88, salary: 6_000_000, country: 'CAN', team: 'EDM', position: 'G'},
  {name: 'G2', handedness: 'R', overall: 85, salary: 5_500_000, country: 'SUI', team: 'VAN', position: 'G'},
];
