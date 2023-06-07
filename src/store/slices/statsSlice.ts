import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StackOverflowState {
  reputation: number | null;
  gold: number | null;
  silver: number | null;
  bronze: number | null;
}

interface GithubState {
  stars: number | null;
  repos: number | null;
}

interface StatsState {
  stackoverflow: StackOverflowState;
  github: GithubState;
  loading: boolean;
}

const initialState: StatsState = {
  stackoverflow: {
    reputation: 475,
    gold: 1,
    silver: 10,
    bronze: 20,
  },
  github: {
    stars: 10,
    repos: 40,
  },
  loading: false,
};

export const getStats = createAsyncThunk("stats/getStats", async () => {
  const githubStarsResponse = await axios.get(
    `https://api.github.com/users/${process.env.REACT_APP_GITHUB_USERNAME}/starred`
  );
  const githubResponse = await axios.get(
    `https://api.github.com/users/${process.env.REACT_APP_GITHUB_USERNAME}`
  );
  const stackoverflowResponse = await axios.get(
    `https://api.stackexchange.com/2.2/users/15415996?&key=${process.env.REACT_APP_STACKOVERFLOW_API_KEY}&site=stackoverflow`
  );
  const customResponse = {
    reputation: stackoverflowResponse?.data.items[0]?.reputation,
    gold: stackoverflowResponse?.data.items[0]?.badge_counts?.gold,
    silver: stackoverflowResponse?.data.items[0]?.badge_counts?.silver,
    bronze: stackoverflowResponse?.data.items[0]?.badge_counts?.bronze,
    stars: githubStarsResponse.data.length,
    repos: githubResponse.data.public_repos,
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
      state.github.stars = action.payload.stars;
      state.github.repos = action.payload.repos;
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
