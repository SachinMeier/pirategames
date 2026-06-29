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
    url: "https://sachinmeier.github.io/sonar/"
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
    id: "geolearn",
    title: "GeoLearn",
    category: "Trivia",
    tags: ["geography", "trivia", "quiz", "learning", "maps", "countries"],
    blurb: "Test your knowledge of the world, one map at a time.",
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
    blurb: "Outwit your rivals with logic, rhetoric, and a little misdirection.",
    year: 2025,
    plays: 0,
    accent: "#f472b6",
    glyph: "🧠",
    url: "https://sophism.pirategames.org"
  },

  // ----- Example / placeholder games (swap or remove as the real catalogue grows) -----
  {
    id: "cannon-cove",
    title: "Cannon Cove",
    category: "Action",
    tags: ["artillery", "aim", "physics"],
    blurb: "Angle your cannons and blast rival ships out of the cove.",
    year: 2024,
    plays: 184200,
    accent: "#ff2e63",
    glyph: "💥",
    url: "#"
  },
  {
    id: "kraken-dive",
    title: "Kraken Dive",
    category: "Arcade",
    tags: ["endless", "underwater", "reflex"],
    blurb: "Dive deeper than any diver dared and dodge the tentacles.",
    year: 2025,
    plays: 92750,
    accent: "#08d9d6",
    glyph: "🐙",
    url: "#"
  },
  {
    id: "plank-runner",
    title: "Plank Runner",
    category: "Arcade",
    tags: ["endless", "runner", "reflex"],
    blurb: "Sprint the plank, leap the gaps, never look down.",
    year: 2023,
    plays: 311900,
    accent: "#fcd34d",
    glyph: "🏃",
    url: "#"
  },
  {
    id: "galleon-wars",
    title: "Galleon Wars",
    category: "Strategy",
    tags: ["fleet", "tactics", "turn-based"],
    blurb: "Command a fleet and rule the trade routes.",
    year: 2025,
    plays: 67400,
    accent: "#34d399",
    glyph: "🚢",
    url: "#"
  },
  {
    id: "cutlass-clash",
    title: "Cutlass Clash",
    category: "Action",
    tags: ["fighting", "duel", "versus"],
    blurb: "Parry, riposte, and out-duel the deadliest buccaneers.",
    year: 2023,
    plays: 158600,
    accent: "#f97316",
    glyph: "⚔️",
    url: "#"
  },
  {
    id: "tide-tactics",
    title: "Tide Tactics",
    category: "Strategy",
    tags: ["grid", "turn-based", "tactics"],
    blurb: "Read the tides and outmaneuver the navy on a hex sea.",
    year: 2025,
    plays: 43800,
    accent: "#60a5fa",
    glyph: "🧭",
    url: "#"
  },
  {
    id: "reef-racer",
    title: "Reef Racer",
    category: "Racing",
    tags: ["boats", "speed", "time-trial"],
    blurb: "Thread the reefs at full sail in this time-trial racer.",
    year: 2022,
    plays: 134700,
    accent: "#2dd4bf",
    glyph: "🛥️",
    url: "#"
  },
  {
    id: "maelstrom",
    title: "Maelstrom",
    category: "Arcade",
    tags: ["bullet-hell", "survival", "intense"],
    blurb: "Survive the storm of cannonfire in a spiraling bullet hell.",
    year: 2025,
    plays: 88200,
    accent: "#e879f9",
    glyph: "🌀",
    url: "#"
  }
];
