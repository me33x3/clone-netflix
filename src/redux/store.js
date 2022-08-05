import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./reducers";

const store = configureStore({
  reducer: {
    movie: movieReducer
  }
});

export default store;