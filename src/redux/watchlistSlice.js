import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const alreadyExists = state.items.some((m) => m.id === action.payload.id);
      if (!alreadyExists) {
        state.items.push(action.payload);
      }
    },
    removeMovie: (state, action) => {
      state.items = state.items.filter((m) => m.id !== action.payload.id);
    },
    clearWatchlist: (state) => {
      state.items = [];
    },
  },
});

export const { addMovie, removeMovie, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;