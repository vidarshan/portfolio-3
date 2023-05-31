import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface GithubState {
  stars: number;
  commits: number;
  loading: boolean;
}

const initialState: GithubState = {
  stars: 0,
  commits: 0,
  loading: false,
};

export const getGithubStats = createAsyncThunk("github/getStats", async () => {
  //   const githubStarsResponse = await axios.get(
  //     `https://api.github.com/users/${process.env.REACT_APP_GITHUB_USERNAME}/starred`
  //   );
  return { commits: 0, stars: 0 };
});

export const GithubSlice = createSlice({
  name: "Github",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGithubStats.fulfilled, (state, action) => {
      state.commits = action.payload.commits;
      state.stars = action.payload.stars;
      state.loading = false;
    });
    builder.addCase(getGithubStats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGithubStats.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default GithubSlice.reducer;
