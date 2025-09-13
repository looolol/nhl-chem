export interface Player {
  name: string;
  handedness: 'L' | 'R';
  overall: number;
  salary: number
  country: string;
  team: string;
  position: 'FWD' | 'DEF' | 'G';
}
