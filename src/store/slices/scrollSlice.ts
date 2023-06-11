import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StatsState {
  scrolled: boolean;
}

const initialState: StatsState = {
  scrolled: false,
};

export const ScrollSlice = createSlice({
  name: "Scroll",
  initialState,
  reducers: {
    setOverScroll(state: StatsState, action: PayloadAction<any>) {
      state.scrolled = action.payload;
    },
  },
});

export const { setOverScroll } = ScrollSlice.actions;
export default ScrollSlice.reducer;
