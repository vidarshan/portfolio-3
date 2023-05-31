import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "github",
  initialState: {
    stars: 0,
    commits: 0,
  },
  reducers: {},
});

export const getGithubInfo = createAsyncThunk("getGithubInfo", async () => {
  // `https://api.github.com/users/${process.env.REACT_APP_GITHUB_USERNAME}/starred`
  const githubresponse = await fetch(``);
  console.log(githubresponse);
});

export const {} = githubSlice.actions;
export default githubSlice.reducer;
