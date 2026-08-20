# Base44 Dev Environment

## Overview
Elixr-Auto is a pure frontend Vite + React + TypeScript app (car/crypto dealership marketing site). No backend, no database, no external services — no secrets required.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
- Web entry point: http://localhost:3000 (mapped from container port 3000)
- Vite dev server with live reload; source is bind-mounted from the repo root.
- `npm install` runs at container start; node_modules live in a named volume.

## Verify
- `docker compose -f docker-compose.base44.yml ps` → `web` should be `healthy`.
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` returns the HTML shell with `/src/main.tsx`.

## Notes
- `vite.config.ts` sets `server.host: true` and `allowedHosts: true` so the preview's external hostname is accepted.
- `server.open: true` logs a harmless `spawn xdg-open ENOENT` error inside the container (no browser available).
