# Movie Discovery

A React app for browsing what's popular right now, searching for anything else, and keeping a running watchlist while you decide what to watch. Built as a project to work through core React concepts end to end — components, routing, hooks, global state, and error handling — using real data instead of a mocked-up dataset.

Live movie data comes from [The Movie Database (TMDB)](https://www.themoviedb.org/).

## What it does

- **Browse** — the home page pulls TMDB's current popular movies on load.
- **Search** — look up any title; results and the current query stay in the URL, so a search is shareable and survives a refresh.
- **View details** — click through to a full page for any movie: overview, rating, release year.
- **Watchlist** — add or remove movies from any screen. The count shows live in the nav bar, and the watchlist page lets you clear it out entirely.
- **Handles the unhappy paths** — slow networks show a loading state, failed requests show a real error message instead of a blank screen, and a crash in a page's rendering is caught and recoverable rather than taking down the whole app.

## Stack

- **React 19** with functional components and hooks throughout, plus one class component (the nav bar) for its lifecycle methods
- **React Router v7** for routing, route params, and query strings
- **Redux Toolkit** for the watchlist's global state
- **Axios** and the native **Fetch API** — used side by side deliberately, for the search/detail requests and the home page feed respectively
- **Vite** for the dev server and build

## Getting started

You'll need a free TMDB API key — sign up at [themoviedb.org](https://www.themoviedb.org/settings/api) and grab one from your account settings, it's approved instantly.

```bash
git clone https://github.com/adityajagtap976-collab/movie-discovery-app.git
cd movie-discovery-app
npm install
```

Create a `.env` file in the project root with your key:

```
VITE_TMDB_API_KEY=your_key_here
```

Then run it:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project structure

```
src/
  components/   # Reusable UI: MovieCard, Navbar, SearchBar, MovieGrid, ErrorBoundary
  hocs/         # withLoadingState — wraps a component with loading/error handling
  hooks/        # useFetch — shared data-fetching logic
  redux/        # Watchlist store, slice, and actions
  pages/        # Home, Search, MovieDetail, Watchlist
  services/     # API calls (Fetch-based and Axios-based)
  styles/       # CSS Modules, one per component/page
```

## Notes on a few decisions

- The watchlist's global state was first built with `useReducer` + Context, then migrated to Redux Toolkit. Both versions exist in the codebase — the standalone `useReducer` implementation was left in place as a reference rather than deleted once Redux replaced it in the app itself.
- Two different HTTP approaches are used on purpose (`fetch` for one page, `axios` for another) so both patterns get exercised rather than picking one and never touching the other.
- Watchlist state lives only in memory. Refreshing the page clears it — there's no backend or local storage involved, by design, since persistence wasn't part of the scope here.

## Disclaimer

This is a personal/academic project and is not affiliated with, endorsed by, or certified by TMDB in any way.