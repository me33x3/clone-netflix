import { configureStore } from "@reduxjs/toolkit";
import { reducer, movieReducer } from "./reducers";

const store = configureStore({
  reducer: {
    base: reducer,
    movie: movieReducer
  }
});

export default store;