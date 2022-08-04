import { createSlice } from "@reduxjs/toolkit";

const initialState={

};

const movieSlice=createSlice({
  name: 'movie',
  initialState,
  reducers: {

  }
});

export const movieActions=movieSlice.actions;
export default movieSlice.reducer;