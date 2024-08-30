import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import musicReducer from "../Slice/MusicSlice";
import artistReducer from "../Slice/artistSlice";
import addMusicReducer from "../Slice/addMusicSlice";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // Add reducers here

    music: musicReducer,
    artist: artistReducer,
    addMusic: addMusicReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [
          "music/addMusicList",
          "music/updateMusicList",
          "music/uploadImage",
        ],
      },
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export default store;
