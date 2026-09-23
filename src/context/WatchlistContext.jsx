import { createContext, useContext, useReducer } from 'react';
import { watchlistReducer, initialWatchlistState } from './watchlistReducer';

export const WatchlistContext = createContext(null);

export function WatchlistProvider({ children }) {
  const [state, dispatch] = useReducer(watchlistReducer, initialWatchlistState);
  return (
    <WatchlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}