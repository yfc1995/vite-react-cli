import { createSlice } from "@reduxjs/toolkit";

const state = {
  sum: 0
}

const demoSlice = createSlice({
  name: 'demo',
  initialState: state,
  reducers: {
    add(state, { payload }) {
      state.sum += payload.num
    }
  }
})


export const { add } = demoSlice.actions;

export const asyncAdd = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(add(payload))
  }, 1000)
}


export default demoSlice.reducer;