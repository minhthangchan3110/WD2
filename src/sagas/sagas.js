import { takeEvery, put, call } from 'redux-saga/effects';
import {
  FETCH_BOOKS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK,
  ADD_BOOK_FAILURE,
  DELETE_BOOK,
  DELETE_BOOK_FAILURE,
  UPDATE_BOOK,
  UPDATE_BOOK_FAILURE,
  fetchBooksSuccess,
  fetchBooksFailure,
  addBookSuccess,
  addBookFailure,
  deleteBookSuccess,
  deleteBookFailure,
  updateBookSuccess,
  updateBookFailure
} from '../actions/actions';
import * as api from '../api/api';

function* fetchBooksSaga() {
  try {
    const response = yield call(api.fetchBooks);
    yield put(fetchBooksSuccess(response.data));
  } catch (error) {
    yield put(fetchBooksFailure(error.message));
  }
}

function* addBookSaga(action) {
  try {
    const response = yield call(api.addBook, action.payload);
    yield put(addBookSuccess(response.data));
  } catch (error) {
    yield put(addBookFailure(error.message));
  }
}

function* deleteBookSaga(action) {
  try {
    yield call(api.deleteBook, action.payload);
    yield put(deleteBookSuccess(action.payload));
  } catch (error) {
    yield put(deleteBookFailure(error.message));
  }
}

function* updateBookSaga(action) {
  try {
    const response = yield call(api.updateBook, action.payload);
    yield put(updateBookSuccess(response.data));
  } catch (error) {
    yield put(updateBookFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_BOOKS, fetchBooksSaga);
  yield takeEvery(ADD_BOOK, addBookSaga);
  yield takeEvery(DELETE_BOOK, deleteBookSaga);
  yield takeEvery(UPDATE_BOOK, updateBookSaga);
}

export default rootSaga;