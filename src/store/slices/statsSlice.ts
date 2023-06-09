import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StackOverflowState {
  reputation: number | null;
  gold: number | null;
  silver: number | null;
  bronze: number | null;
}

interface StatsState {
  stackoverflow: StackOverflowState;
  loading: boolean;
}

const initialState: StatsState = {
  stackoverflow: {
    reputation: 475,
    gold: 1,
    silver: 10,
    bronze: 20,
  },
  loading: false,
};

export const getStats = createAsyncThunk("stats/getStats", async () => {
  const stackoverflowResponse = await axios.get(
    `${process.env.REACT_APP_STACK_EXCHANGE_URL}${process.env.REACT_APP_STACKOVERFLOW_USER}?&key=${process.env.REACT_APP_STACKOVERFLOW_API_KEY}&site=stackoverflow`
  );
  const customResponse = {
    reputation: stackoverflowResponse?.data.items[0]?.reputation,
    gold: stackoverflowResponse?.data.items[0]?.badge_counts?.gold,
    silver: stackoverflowResponse?.data.items[0]?.badge_counts?.silver,
    bronze: stackoverflowResponse?.data.items[0]?.badge_counts?.bronze,
  };

  return customResponse;
});

export const StatsSlice = createSlice({
  name: "Stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStats.fulfilled, (state, action) => {
      state.stackoverflow.reputation = action.payload.reputation;
      state.stackoverflow.gold = action.payload.gold;
      state.stackoverflow.silver = action.payload.silver;
      state.stackoverflow.bronze = action.payload.bronze;
      state.loading = false;
    });
    builder.addCase(getStats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStats.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default StatsSlice.reducer;
