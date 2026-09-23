export const initialWatchlistState = {
  items: [],
};

export function watchlistReducer(state, action) {
  switch (action.type) {
    case 'ADD_MOVIE': {
      const alreadyExists = state.items.some((m) => m.id === action.payload.id);
      if (alreadyExists) return state;
      return { items: [...state.items, action.payload] };
    }
    case 'REMOVE_MOVIE':
      return { items: state.items.filter((m) => m.id !== action.payload.id) };
    case 'CLEAR_WATCHLIST':
      return { items: [] };
    default:
      return state;
  }
}