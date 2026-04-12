# Graph Report - .  (2026-04-10)

## Corpus Check
- Large corpus: 52 files · ~706,002 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 71 nodes · 65 edges · 19 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `TradeCopier Platform` - 6 edges
2. `Xavier Petilaire-Bellet` - 3 edges
3. `Forex Newsletter Preview` - 2 edges
4. `Forex/Trading Domain` - 2 edges
5. `Favicon 96x96` - 2 edges
6. `Xavier Petilaire-Bellet CV` - 1 edges
7. `TradeCopier Analytics UI` - 1 edges
8. `TradeCopier News UI` - 1 edges
9. `Portfolio Favicon` - 1 edges
10. `TradeCopier Dashboard UI` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Xavier Petilaire-Bellet CV` --references--> `Xavier Petilaire-Bellet`  [INFERRED]
  public/cv.pdf → README.md
- `Portfolio Favicon` --conceptually_related_to--> `Xavier Petilaire-Bellet`  [INFERRED]
  public/flavicon.png → README.md
- `Forex Newsletter Preview` --semantically_similar_to--> `TradeCopier Platform`  [INFERRED] [semantically similar]
  public/images/forex-newsletter-preview.png → public/tradecopier-dashboard.png
- `TradeCopier Analytics UI` --conceptually_related_to--> `TradeCopier Platform`  [INFERRED]
  public/tradecopier-analytics.png → public/tradecopier-dashboard.png
- `TradeCopier News UI` --conceptually_related_to--> `TradeCopier Platform`  [INFERRED]
  public/tradecopier-news.png → public/tradecopier-dashboard.png

## Hyperedges (group relationships)
- **TradeCopier App Screens** — file_tc_analytics, file_tc_news, file_tc_dashboard, file_tc_list [INFERRED 0.95]
- **Favicon Set** — favicon_128x128, favicon_96x96, favicon_32x32 [INFERRED 0.95]
- **Nasa Media Collection** — nasa_2, nasa_main [INFERRED 0.85]
- **Esiea Media Collection** — esiea_1, esiea_2 [INFERRED 0.90]

## Communities

### Community 0 - "Community 0 (e.g. borderbeam...)"
Cohesion: 0.15
Nodes (0): 

### Community 1 - "Community 1 (e.g. app...)"
Cohesion: 0.18
Nodes (0): 

### Community 2 - "Community 2 (e.g. concept_mui...)"
Cohesion: 0.25
Nodes (7): Material UI, React, TypeScript, Vite, Xavier Petilaire-Bellet CV, Portfolio Favicon, Xavier Petilaire-Bellet

### Community 3 - "Community 3 (e.g. concept_forex_t...)"
Cohesion: 0.33
Nodes (7): Forex/Trading Domain, TradeCopier Platform, Forex Newsletter Preview, TradeCopier Analytics UI, TradeCopier Dashboard UI, TradeCopier List UI, TradeCopier News UI

### Community 4 - "Community 4 (e.g. projectgallery...)"
Cohesion: 0.4
Nodes (0): 

### Community 5 - "Community 5 (e.g. about...)"
Cohesion: 0.67
Nodes (0): 

### Community 6 - "Community 6 (e.g. favicon_128x128...)"
Cohesion: 0.67
Nodes (3): Favicon 128x128, Favicon 32x32, Favicon 96x96

### Community 7 - "Community 7 (e.g. animatedcounter...)"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Community 8 (e.g. esiea_1...)"
Cohesion: 1.0
Nodes (2): Esiea 1, Esiea 2

### Community 9 - "Community 9 (e.g. nasa_2...)"
Cohesion: 1.0
Nodes (2): Nasa 2, Nasa Main

### Community 10 - "Community 10 (e.g. vite_config...)"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11 (e.g. main...)"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12 (e.g. vite_env_d...)"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Community 13 (e.g. setup...)"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Community 14 (e.g. file_esiea...)"
Cohesion: 1.0
Nodes (1): ESIEA Inscription View

### Community 15 - "Community 15 (e.g. file_nasa...)"
Cohesion: 1.0
Nodes (1): NASA App UI

### Community 16 - "Community 16 (e.g. forex_newslette...)"
Cohesion: 1.0
Nodes (1): Forex Newsletter Detail

### Community 17 - "Community 17 (e.g. mutuacy_main...)"
Cohesion: 1.0
Nodes (1): Mutuacy Main

### Community 18 - "Community 18 (e.g. quasar_logo_ver...)"
Cohesion: 1.0
Nodes (1): Quasar Logo Vertical

## Knowledge Gaps
- **21 isolated node(s):** `Xavier Petilaire-Bellet CV`, `TradeCopier Analytics UI`, `TradeCopier News UI`, `Portfolio Favicon`, `TradeCopier Dashboard UI` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 7 (e.g. animatedcounter...)`** (2 nodes): `AnimatedCounter.tsx`, `AnimatedCounter()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8 (e.g. esiea_1...)`** (2 nodes): `Esiea 1`, `Esiea 2`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9 (e.g. nasa_2...)`** (2 nodes): `Nasa 2`, `Nasa Main`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10 (e.g. vite_config...)`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11 (e.g. main...)`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12 (e.g. vite_env_d...)`** (1 nodes): `vite-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13 (e.g. setup...)`** (1 nodes): `setup.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14 (e.g. file_esiea...)`** (1 nodes): `ESIEA Inscription View`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15 (e.g. file_nasa...)`** (1 nodes): `NASA App UI`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16 (e.g. forex_newslette...)`** (1 nodes): `Forex Newsletter Detail`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17 (e.g. mutuacy_main...)`** (1 nodes): `Mutuacy Main`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18 (e.g. quasar_logo_ver...)`** (1 nodes): `Quasar Logo Vertical`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 6 inferred relationships involving `TradeCopier Platform` (e.g. with `TradeCopier Analytics UI` and `TradeCopier News UI`) actually correct?**
  _`TradeCopier Platform` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Xavier Petilaire-Bellet` (e.g. with `Xavier Petilaire-Bellet CV` and `Portfolio Favicon`) actually correct?**
  _`Xavier Petilaire-Bellet` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Forex Newsletter Preview` (e.g. with `Forex/Trading Domain` and `TradeCopier Platform`) actually correct?**
  _`Forex Newsletter Preview` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Forex/Trading Domain` (e.g. with `TradeCopier Platform` and `Forex Newsletter Preview`) actually correct?**
  _`Forex/Trading Domain` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Favicon 96x96` (e.g. with `Favicon 128x128` and `Favicon 32x32`) actually correct?**
  _`Favicon 96x96` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Xavier Petilaire-Bellet CV`, `TradeCopier Analytics UI`, `TradeCopier News UI` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._