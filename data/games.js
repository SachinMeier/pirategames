/*
 * Shared game catalogue data.
 * Every mockup page (/1, /2, /3) reads from window.GAMES so the data stays
 * in one place and the pages only differ in styling.
 *
 * Swap these placeholder entries for your real games. Each game needs:
 *   id     - unique slug (used for the play link)
 *   title  - display name
 *   category - single primary category (drives the filter chips)
 *   tags   - extra keywords, also searched
 *   blurb  - one-line description
 *   year   - release year
 *   plays  - play count (number; formatted on the page)
 *   accent - hex color used for the generated thumbnail
 *   glyph  - emoji shown on the thumbnail (stand-in for cover art)
 *   url    - where the game lives (use "#" until it's wired up)
 *   soon   - optional; set true to show a "Coming Soon" badge and disable the link
 */
window.GAMES = [
  // ----- Live games -----
  {
    id: "pirate-scrabble",
    title: "Pirate Scrabble",
    category: "Word",
    tags: ["words", "multiplayer", "strategy", "scrabble", "spelling"],
    blurb: "Build words, then plunder and remix your opponents' for your own.",
    year: 2025,
    plays: 4200,
    accent: "#e8b54a",
    glyph: "📜",
    thumb: "images/games/pirate-scrabble.png",
    url: "https://piratescrabble.com"
  },
  {
    id: "sonar",
    title: "Sonar",
    category: "Strategy",
    tags: ["ship", "navigation", "stealth", "puzzle", "submarine"],
    blurb: "Guide your ship through deadly waters to freedom.",
    year: 2025,
    plays: 1800,
    accent: "#2dd4bf",
    glyph: "📡",
    thumb: "images/games/sonar.svg",
    url: "https://sonar.pirategames.org"
  },
  {
    id: "orbit",
    title: "Orbit",
    category: "Arcade",
    tags: ["space", "asteroids", "shooter", "flying", "dodge"],
    blurb: "Pilot your spaceship through asteroids and enemy ships.",
    year: 2025,
    plays: 2600,
    accent: "#8b8cf8",
    glyph: "🚀",
    thumb: "images/games/orbit-cover.png",
    url: "https://orbit.pirategames.org",
    soon: true
  },
  {
    id: "severance",
    title: "Lumon",
    category: "Mystery",
    tags: ["mystery", "puzzle", "narrative", "numbers", "office"],
    blurb: "The work is mysterious and important.",
    year: 2025,
    plays: 3100,
    accent: "#38bdf8",
    glyph: "🔢",
    thumb: "images/games/lumon.png",
    url: "https://severance.pirategames.org",
    soon: true
  },
  {
    id: "high-society",
    title: "High Society",
    category: "Card",
    tags: ["auction", "bidding", "cards", "bluffing", "knizia", "reiner knizia"],
    blurb: "Bid for luxury and status — just don't end up the poorest aristocrat.",
    year: 2025,
    plays: 0,
    accent: "#c084fc",
    glyph: "🎩",
    url: "#", // TODO: add live URL
    soon: true
  },
  {
    id: "phalanx",
    title: "Phalanx",
    category: "Strategy",
    tags: ["strategy", "boardgame", "tactics", "warfare", "phalanx"],
    blurb: "Maneuver and manipulate your phalanx to victory.",
    year: 2025,
    plays: 0,
    accent: "#c2410c",
    glyph: "🛡️",
    url: "#",
    soon: true
  },
  {
    id: "geolearn",
    title: "GeoLearn",
    category: "Trivia",
    tags: ["geography", "trivia", "quiz", "learning", "maps", "countries"],
    blurb: "Test your knowledge of geography.",
    year: 2025,
    plays: 0,
    accent: "#34d399",
    glyph: "🌍",
    url: "https://gquiz.pirategames.org"
  },
  {
    id: "sophism",
    title: "Sophism",
    category: "Trivia",
    tags: ["trivia", "quiz", "philosophy", "logic", "knowledge"],
    blurb: "Practice trivia about architecture, military history, and art.",
    year: 2025,
    plays: 0,
    accent: "#f472b6",
    glyph: "🧠",
    thumb: "images/games/sophism.jpg",
    url: "https://sophism.pirategames.org"
  }
];
