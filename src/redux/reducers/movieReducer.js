import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
  load: {
    trend: false,
    movie: false
  }
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getTrending(state, action) {
      state.trending = action.payload.trending;
      state.load.trend = true;
    },
    getMovies(state, action) {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upComingMovies = action.payload.upComingMovies;
      state.load.movie = true;
    }
  }
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;