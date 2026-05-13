const standings = [
  { driver: "late", team: "Alpine", points: 72 },
  { driver: "xyro", team: "Audi", points: 58 },
  { driver: "Yatneil", team: "Audi", points: 46 },
  { driver: "Vini", team: "Peugeot", points: 26 },
  { driver: "Mokrouxton", team: "Haas", points: 23 },
  { driver: "Ade", team: "BMW", points: 21 },
  { driver: "Justk4rt", team: "Peugeot", points: 19 },
  { driver: "LordGRIMM", team: "Williams", points: 18 },
  { driver: "saul_security", team: "Alpine", points: 18 },
  { driver: "N1teiger", team: "Peugeot", points: 18 },
  { driver: "DeDe", team: "Mclaren", points: 17 },
  { driver: "Kurjaka", team: "Peugeot", points: 16 },
  { driver: "dummy", team: "Aston", points: 12 },
  { driver: "training", team: "Mercedes", points: 12 },
  { driver: "Curren", team: "Ferrari", points: 12 },
  { driver: "Shah", team: "Vcarb", points: 11 },
  { driver: "Al3x", team: "Cadillac", points: 10 },
  { driver: "Cavalry", team: "Mclaren", points: 8 },
  { driver: "dudegameo", team: "Alpine", points: 6 },
  { driver: "soso", team: "Mclaren", points: 4 },
  { driver: "f1 phantom", team: "Mercedes", points: 3 },
  { driver: "Gabe", team: "Alpine", points: 2 },
  { driver: "Leighton", team: "Red Bull", points: 2 },
  { driver: "immortal", team: "Red Bull", points: 2 },
  { driver: "imnotbern", team: "Audi", points: 1 },
  { driver: "oibossbs", team: "BMW", points: 1 },
  { driver: "Jayethanli", team: "Cadillac", points: 1 },
  { driver: "Yanfrito", team: "Peugeot", points: 1 }
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
  Aston: "Aston Martin",
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

const teamLogoUrls = {
  Audi: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Audi%20logo.svg",
  Alpine: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Alpine%20F1%20Team%20Logo.svg",
  Peugeot: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peugeot%20logo.svg",
  Mclaren: "https://commons.wikimedia.org/wiki/Special:Redirect/file/McLaren%202018%20logo.svg",
  Mercedes: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-Logo.svg",
  Williams: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Williams%20Racing%202022%20logo.svg",
  Vcarb: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Red%20Bull%20Racing%20-%202021%20Logo.svg",
  Aston: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aston%20Martin%20wordmark.svg",
  Haas: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Haas%20F1%20Team%20Logo.svg",
  "Red Bull": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Red%20Bull%20Racing%20-%202021%20Logo.svg",
  Ferrari: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ferrari%20wordmark.svg"
};

const siteMeta = {
  lastUpdated: "13 May 2026"
};

const upcomingRace = {
  title: "British GP",
  track: "Silverstone Circuit",
  round: "S1 Round 5",
  date: "17th May",
  conditions: "19:30 IST",
  startTimeIso: "2026-05-17T19:30:00+05:30"
};

const raceResults = [
  {
    round: "Round 1",
    track: "Australian GP",
    winner: "late",
    team: "Alpine",
    results: [
      { position: 1, driver: "late", racePoints: 25 },
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
      { position: 3, driver: "late", racePoints: 15 },
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
    winner: "late",
    team: "Alpine",
    results: [
      { position: 1, driver: "late", racePoints: 25 },
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
  }
];
