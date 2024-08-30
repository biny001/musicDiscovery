import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  artist: "",
  genre: "",
  description: "",
  length: "",
  created_at: "",
};

const addMusicSlice = createSlice({
  name: "addMusic",
  initialState: initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => initialState,
    setField: (state, action) => {
      return { ...state, ...action.payload };
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { updateField, resetForm, setField, setImage } =
  addMusicSlice.actions;

export default addMusicSlice.reducer;

// setMusic: (state, action) => {
//     state.title = action.payload.title;
//     state.artist = action.payload.artist;
//     state.genre = action.payload.genre;
//     state.description = action.payload.description;
//     state.createdAt = new Date().toISOString();
//   },
