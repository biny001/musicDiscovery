import { call, put, takeLatest } from "redux-saga/effects";
import { setMusicList, setLoading, setError } from "../Slice/MusicSlice";
import {
  fetchData,
  updateData,
  addData,
  deleteData,
  uploadFile,
} from "../supabase/helper";
import { resetForm } from "../Slice/addMusicSlice";

function* getMusicList() {
  try {
    yield put(setLoading());
    const data = yield call(fetchData);
    // console.log(data);
    yield put(setMusicList(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* addMusicList(action) {
  try {
    yield put(setLoading());
    // console.log(action.payload.image);
    const file = yield call(uploadImage, action.payload.image);

    const data = yield call(addData, { ...action.payload, image: file?.url });
    console.log(data);

    yield call(getMusicList);
    yield put(resetForm());
  } catch (error) {
    console.log(error);
  }
}

function* updateMusicList(action) {
  try {
    yield put(setLoading());
    const { id, item } = action.payload;
    const data = yield call(updateData, id, item);
    console.log(data);
    yield call(getMusicList);
    yield put(resetForm());
  } catch (error) {
    console.log(error);
  }
}

function* deleteMusicList(action) {
  try {
    yield put(setLoading());

    const data = yield call(deleteData, action.payload);
    // console.log(data);
    yield call(getMusicList);
    yield put(resetForm());
  } catch (error) {
    console.log(error);
  }
}

function* uploadImage(action) {
  try {
    console.log(action);
    yield put(setLoading());
    const data = yield call(uploadFile, action);

    // yield call(getMusicList);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function* watchDataRequests() {
  // Listens for fetch, post, and delete actions
  yield takeLatest("music/getMusicList", getMusicList);
  yield takeLatest("music/addMusicList", addMusicList);
  yield takeLatest("music/updateMusicList", updateMusicList);
  yield takeLatest("music/deleteMusicList", deleteMusicList);
  // yield takeLatest(deleteDataRequest.type, deleteDataSaga);
}
