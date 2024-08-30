import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicList: [],
  loading: false,
  error: null,
};

const musicSlice = createSlice({
  name: "music",
  initialState: initialState,
  reducers: {
    setMusicList: (state, action) => {
      state.loading = false;
      state.musicList = action.payload;
    },
    // removeMusic: (state, action) => {
    //   state.musicList = state.musicList.filter(
    //     (music) => music.id !== action.payload
    //   );
    // },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setMusicList, setLoading, setError } = musicSlice.actions;

export default musicSlice.reducer;
