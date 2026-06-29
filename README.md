# Pirate Games

A static game catalogue built for GitHub Pages — no server, no build step. The landing
page presents three design directions for the same content; pick one and we'll build the
real site from it.

## Structure

```
.
├── index.html        # Landing — links to the two style mockups
├── data/games.js     # Single source of truth for the game list (window.GAMES)
├── 1/index.html      # Direction 1 — Retro (deep-sea blue + oak/treasure, toned-down pixel)
└── 2/index.html      # Direction 2 — Ship's Helm (sci-fi HUD + neon glow, teak & brass)
```

Each mockup is a self-contained page (its own CSS/JS) that reads the shared
`data/games.js`, so the two differ only in styling. Every page has:

- a **grid** of game cards (generated thumbnails — no image assets needed yet)
- a **live search** bar (filters by title, category, tag, and blurb as you type)
- **category filter** chips
- an **About** view (toggled in-page via the nav, no routing required)

## Editing the catalogue

Open `data/games.js` and edit the `window.GAMES` array. Each entry:

| field      | what it is                                            |
|------------|-------------------------------------------------------|
| `id`       | unique slug                                           |
| `title`    | display name                                          |
| `category` | primary category — drives the filter chips            |
| `tags`     | extra keywords (searched, not shown)                  |
| `blurb`    | one-line description                                  |
| `year`     | release year                                          |
| `plays`    | play count (number; auto-formatted, e.g. `184K`)      |
| `accent`   | hex color for the generated thumbnail                 |
| `glyph`    | emoji shown on the thumbnail (stand-in for cover art) |
| `url`      | where the game lives (`#` until wired up)             |
| `soon`     | optional — `true` shows a "Coming Soon" badge and disables the link |

Live games open in a new tab. The first entries are the real games; the rest are
pirate-themed examples kept as filler until the catalogue grows — swap or delete them.

## Local preview

It's plain static files, so any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly via `file://` also works, except the shared
`data/games.js` fetch path — use the server for an accurate preview.)

## Deploy to GitHub Pages

1. Push this directory to a GitHub repo.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Choose your branch and the **`/ (root)`** folder, then Save.

Clean URLs work out of the box because each direction lives in its own folder with an
`index.html` — `/1/`, `/2/`, `/3/`.

## Next steps

Once you pick a direction, we'll promote it to the root, drop the other two mockups,
wire in real game URLs, and add anything else (tags page, favorites, etc.).
