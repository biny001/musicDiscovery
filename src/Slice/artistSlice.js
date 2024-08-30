import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artist: {
    id: 1,
    name: "Benjamin",
    genre: "Pop",
    bio: "A talented artist known for chart-topping hits.",
    image: "path/to/image.jpg",
  },

  loading: false,
  error: null,
};

const artistSlice = createSlice({
  name: "artist",
  initialState: initialState,
  reducers: {
    setArtist: (state, action) => {
      state.artist = { ...state.artist, ...action.payload };
    },
  },
});

export const { setArtist, setSong, setAlbum } = artistSlice.actions;

export default artistSlice.reducer;

// song: {
//   title: "Perfect",
//   album: "Divide",
//   length: "4:23",
//   releaseDate: "2017-03-03",
//   trackNumber: 1,
//   lyrics: "Lyrics of the song...",
// },
// album: {
//   title: "Divide",
//   releaseDate: "2017-03-03",
//   coverImage: "path/to/cover.jpg",
//   genre: "Pop",
//   description: "An album filled with memorable tracks.",
//   trackList: [
//     { title: "Perfect", length: "4:23" },
//     { title: "Shape of You", length: "3:53" },
//     // Add more tracks as needed
//   ],
// },
