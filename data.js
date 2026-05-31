const standings = [
  { driver: "Iate", team: "Alpine", points: 90 },
  { driver: "Vini", team: "Peugeot", points: 26 },
  { driver: "Ade", team: "BMW", points: 41 },
  { driver: "Yatneil", team: "Audi", points: 81 },
  { driver: "Shah", team: "Vcarb", points: 11 },
  { driver: "Mokrouxton", team: "Haas", points: 23 },
  { driver: "dudegameo", team: "Alpine", points: 6 },
  { driver: "dummy", team: "Aston", points: 12 },
  { driver: "Leighton", team: "Red Bull", points: 2 },
  { driver: "imnotbern", team: "Peugeot", points: 2 },
  { driver: "xyro", team: "Audi", points: 66 },
  { driver: "DeDe", team: "Alpine", points: 44 },
  { driver: "Kurjaka", team: "Peugeot", points: 16 },
  { driver: "LordGRIMM", team: "Williams", points: 23 },
  { driver: "Gabe", team: "Alpine", points: 2 },
  { driver: "Justk4rt", team: "Peugeot", points: 19 },
  { driver: "f1 phantom", team: "Mercedes", points: 3 },
  { driver: "oibossbs", team: "BMW", points: 1 },
  { driver: "saul_security", team: "Alpine", points: 18 },
  { driver: "training", team: "Mercedes", points: 12 },
  { driver: "soso", team: "Mclaren", points: 8 },
  { driver: "immortal", team: "Red Bull", points: 2 },
  { driver: "Jayethanli", team: "Cadillac", points: 1 },
  { driver: "N1teiger", team: "Red Bull", points: 40 },
  { driver: "Curren", team: "Ferrari", points: 35 },
  { driver: "Al3x", team: "Cadillac", points: 10 },
  { driver: "Cavalry", team: "Mclaren", points: 8 },
  { driver: "Yanfrito", team: "Peugeot", points: 1 },
  { driver: "Crimz", team: "Audi", points: 25 },
  { driver: "Speed", team: "Alten", points: 8 },
  { driver: "maxiemygoat", team: "BMW", points: 8 },
  { driver: "Ursuz", team: "Cadillac", points: 18 },
  { driver: "DanilKyvat", team: "Red Bull", points: 8 },
  { driver: "Denderdim", team: "Alten", points: 1 }
];

const teamStandings = [
  { team: "Alpine", points: 146 },
  { team: "Haas", points: 23 },
  { team: "Audi", points: 173 },
  { team: "Red Bull", points: 34 },
  { team: "Mercedes", points: 15 },
  { team: "Peugeot", points: 75 },
  { team: "Williams", points: 23 },
  { team: "Vcarb", points: 11 },
  { team: "BMW", points: 50 },
  { team: "Ferrari", points: 35 },
  { team: "Cadillac", points: 29 },
  { team: "Aston", points: 12 },
  { team: "Alten", points: 9 },
  { team: "Mclaren", points: 39 }
];

const teamColors = {
  Alpine: "255, 91, 222",
  Peugeot: "110, 174, 85",
  BMW: "47, 82, 128",
  Audi: "136, 57, 48",
  Vcarb: "34, 58, 94",
  Haas: "117, 55, 54",
  Aston: "43, 111, 24",
  "Red Bull": "78, 139, 230",
  Mclaren: "224, 132, 36",
  Williams: "84, 157, 238",
  Mercedes: "95, 158, 169",
  Ferrari: "176, 69, 69",
  Alten: "98, 63, 99",
  Cadillac: "102, 102, 102"
};

const teamsList = [
  "Audi",
  "Alpine",
  "Peugeot",
  "Mclaren",
  "BMW",
  "Mercedes",
  "Williams",
  "Vcarb",
  "Aston",
  "Haas",
  "Red Bull",
  "Cadillac",
  "Ferrari",
  "Alten"
];

const teamDisplayNames = {
  Alpine: "Gucci alpine",
  Aston: "Aston Martin",
  "Red Bull": "Redbull",
  Vcarb: "VCARB"
};

const teamMarks = {
  Audi: "AU",
  Alpine: "AP",
  Peugeot: "PG",
  Mclaren: "MC",
  BMW: "BMW",
  Mercedes: "ME",
  Williams: "WI",
  Vcarb: "VC",
  Aston: "AM",
  Haas: "HS",
  "Red Bull": "RB",
  Cadillac: "CAD",
  Ferrari: "FR",
  Alten: "AL"
};

const teamLogoUrls = {};

const siteMeta = {
  lastUpdated: "31 May 2026"
};

const upcomingRace = {
  flag: "Azerbaijan Event Deck",
  title: "Azerbaijan GP",
  track: "Baku Street Circuit",
  round: "Next Round",
  date: "7 June 2026",
  conditions: "7:30 PM IST",
  startTime: "2026-06-07T19:30:00+05:30"
};

const raceResults = [
  {
    round: "Round 1",
    track: "Australian GP",
    winner: "Iate",
    team: "Alpine",
    results: [
      { position: 1, driver: "Iate", racePoints: 25 },
      { position: 2, driver: "Vini", racePoints: 18 },
      { position: 3, driver: "Ade", racePoints: 15 },
      { position: 4, driver: "Yatneil", racePoints: 12 },
      { position: 5, driver: "Shah", racePoints: 10 },
      { position: 6, driver: "Mokrouxton", racePoints: 8 },
      { position: 7, driver: "dudegameo", racePoints: 6 },
      { position: 8, driver: "dummy", racePoints: 4 },
      { position: 9, driver: "Leighton", racePoints: 2 },
      { position: 10, driver: "imnotbern", racePoints: 1 }
    ]
  },
  {
    round: "Round 2",
    track: "Japanese GP",
    winner: "xyro",
    team: "Audi",
    results: [
      { position: 1, driver: "xyro", racePoints: 25 },
      { position: 2, driver: "Yatneil", racePoints: 18 },
      { position: 3, driver: "Iate", racePoints: 15 },
      { position: 4, driver: "DeDe", racePoints: 12 },
      { position: 5, driver: "Kurjaka", racePoints: 10 },
      { position: 6, driver: "Vini", racePoints: 8 },
      { position: 7, driver: "dummy", racePoints: 6 },
      { position: 8, driver: "LordGRIMM", racePoints: 4 },
      { position: 9, driver: "Gabe", racePoints: 2 },
      { position: 10, driver: "Shah", racePoints: 1 }
    ]
  },
  {
    round: "Round 3",
    track: "Miami Feature Race",
    winner: "xyro",
    team: "Audi",
    results: [
      { position: 1, driver: "xyro", racePoints: 25 },
      { position: 2, driver: "saul_security", racePoints: 18 },
      { position: 3, driver: "Justk4rt", racePoints: 15 },
      { position: 4, driver: "training", racePoints: 12 },
      { position: 5, driver: "Yatneil", racePoints: 10 },
      { position: 6, driver: "LordGRIMM", racePoints: 8 },
      { position: 7, driver: "Ade", racePoints: 6 },
      { position: 8, driver: "soso", racePoints: 4 },
      { position: 9, driver: "immortal", racePoints: 2 },
      { position: 10, driver: "Jayethanli", racePoints: 1 }
    ]
  },
  {
    round: "Round 4",
    track: "German GP",
    winner: "Iate",
    team: "Alpine",
    results: [
      { position: 1, driver: "Iate", racePoints: 25 },
      { position: 2, driver: "N1teiger", racePoints: 18 },
      { position: 3, driver: "Mokrouxton", racePoints: 15 },
      { position: 4, driver: "Curren", racePoints: 12 },
      { position: 5, driver: "Al3x", racePoints: 10 },
      { position: 6, driver: "Cavalry", racePoints: 8 },
      { position: 7, driver: "Yatneil", racePoints: 6 },
      { position: 8, driver: "LordGRIMM", racePoints: 4 },
      { position: 9, driver: "dummy", racePoints: 2 },
      { position: 10, driver: "Yanfrito", racePoints: 1 }
    ]
  },
  {
    round: "Round 5",
    track: "Silverstone GP",
    winner: "Crimz",
    team: "Audi",
    results: [
      { position: 1, driver: "Crimz", racePoints: 25 },
      { position: 2, driver: "Curren", racePoints: 18 },
      { position: 3, driver: "N1teiger", racePoints: 15 },
      { position: 4, driver: "DeDe", racePoints: 12 },
      { position: 5, driver: "Yatneil", racePoints: 10 },
      { position: 6, driver: "Speed", racePoints: 8 },
      { position: 7, driver: "Iate", racePoints: 6 },
      { position: 8, driver: "Ade", racePoints: 4 },
      { position: 9, driver: "maxiemygoat", racePoints: 2 },
      { position: 10, driver: "LordGRIMM", racePoints: 1 }
    ]
  },
  {
    round: "Sprint",
    track: "Mexican Sprint",
    winner: "xyro",
    team: "Audi",
    results: [
      { position: 1, driver: "xyro", racePoints: 8 },
      { position: 2, driver: "N1teiger", racePoints: 7 },
      { position: 3, driver: "Ade", racePoints: 6 },
      { position: 4, driver: "Curren", racePoints: 5 },
      { position: 5, driver: "LordGRIMM", racePoints: 4 },
      { position: 6, driver: "Iate", racePoints: 3 },
      { position: 7, driver: "aston???" },
      { position: 8, driver: "imnotbern", racePoints: 1 }
    ]
  },
  {
    round: "Round 6",
    track: "Mexican GP",
    winner: "Yatneil",
    team: "Audi",
    results: [
      { position: 1, driver: "Yatneil", racePoints: 25 },
      { position: 2, driver: "Ursuz", racePoints: 18 },
      { position: 3, driver: "DeDe", racePoints: 15 },
      { position: 4, driver: "Iate", racePoints: 12 },
      { position: 5, driver: "Ade", racePoints: 10 },
      { position: 6, driver: "DanilKyvat", racePoints: 8 },
      { position: 7, driver: "maxiemygoat", racePoints: 6 },
      { position: 8, driver: "soso", racePoints: 4 },
      { position: 9, driver: "TBD" },
      { position: 10, driver: "Denderdim", racePoints: 1 }
    ]
  }
];
