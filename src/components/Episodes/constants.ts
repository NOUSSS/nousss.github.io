type horsSeriesType = {
  saison: string;
  hs: number[];
};

export const horsSeries: horsSeriesType[] = [
  {
    saison: '10',
    hs: [127, 139, 147, 156, 162, 173, 190, 195, 204, 210, 221],
  },
  {
    saison: '11',
    hs: [4],
  },
];

export const allIndex: { [key: string]: number } = {
  1: 0,
  2: 61,
  3: 143,
  4: 206,
  5: 336,
  6: 389,
  7: 516,
  8: 574,
  9: 746,
  10: 877,
  11: 1088,
};
