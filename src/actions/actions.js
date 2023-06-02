export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const ADD_BOOK_FAILURE = 'ADD_BOOK_FAILURE';
export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const UPDATE_BOOK_FAILURE = 'UPDATE_BOOK_FAILURE';

export function fetchBooks() {
  return { type: FETCH_BOOKS };
}

export function fetchBooksSuccess(books) {
  return { type: FETCH_BOOKS_SUCCESS, payload: books };
}

export function fetchBooksFailure(error) {
  return { type: FETCH_BOOKS_FAILURE, error };
}

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function addBookSuccess(book) {
  return { type: ADD_BOOK_SUCCESS, payload: book };
}

export function addBookFailure(error) {
  return { type: ADD_BOOK_FAILURE, error };
}

export function deleteBook(id) {
  return { type: DELETE_BOOK, payload: id };
}

export function deleteBookSuccess(id) {
  return { type: DELETE_BOOK_SUCCESS, payload: id };
}

export function deleteBookFailure(error) {
  return { type: DELETE_BOOK_FAILURE, error };
}

export function updateBook(book) {
  return { type: UPDATE_BOOK, payload: book };
}

export function updateBookSuccess(book) {
  return { type: UPDATE_BOOK_SUCCESS, payload: book };
}

export function updateBookFailure(error) {
  return { type: UPDATE_BOOK_FAILURE, error };
}