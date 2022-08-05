import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true
}

const slice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    endLoading(state) {
      state.loading = false;
    }
  }
})

export const actions = slice.actions;
export default slice.reducer