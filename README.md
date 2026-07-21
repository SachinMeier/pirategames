# Pirate Games

A static game catalogue for [pirategames.org](https://pirategames.org) — built for GitHub
Pages, no server and no build step. A tea-stained, paper-textured page of raised cards, one
per game, using the Chi-Rho pirate mark as its logo and favicon.

## Structure

```
.
├── index.html         # The site — tea-stained catalogue of game cards
├── data/games.js      # Single source of truth for the game list (window.GAMES)
├── images/
│   ├── pirate-logo.svg # Chi-Rho "P + crossbones" mark (favicon + logo)
│   ├── favicon.*       # Raster favicon fallbacks
│   └── games/          # Per-game cover thumbnails
└── logos/index.html   # Logo lab — mockups of the mark for picking a direction
```

The page reads the shared `data/games.js` and renders a card per game: a cover thumbnail
(or an emoji stand-in), the title, a one-line blurb, and a Play / Coming-soon label. No
search, no tags, no filters — just the games.

## Editing the catalogue

Open `data/games.js` and edit the `window.GAMES` array. Each entry:

| field      | what it is                                            |
|------------|-------------------------------------------------------|
| `id`       | unique slug                                           |
| `title`    | display name                                          |
| `blurb`    | one-line description                                  |
| `accent`   | hex color for the emoji thumbnail tint                |
| `glyph`    | emoji shown when there's no `thumb` (cover stand-in)  |
| `thumb`    | optional — path to a cover image (e.g. `images/games/foo.png`) |
| `url`      | where the game lives (`#` until wired up)             |
| `soon`     | optional — `true` shows "Coming soon" and disables the link |

`category`, `tags`, `year`, and `plays` may still be present on entries but are not shown
by the current design. Live games open in a new tab.

## Local preview

Plain static files, so any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Use the server rather than opening via `file://` so the `data/games.js` load path resolves.

## Deploy to GitHub Pages

Push to the repo; Pages serves from the `/ (root)` folder of the branch. The custom domain
is set via `CNAME` (`pirategames.org`).
