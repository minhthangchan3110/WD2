import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAILURE,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAILURE,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_FAILURE
  } from '../actions/actions';
  
  const initialState = {
    books: [],
    loading: false,
    error: null
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_BOOKS_SUCCESS:
        return { ...state, books: action.payload, loading: false, error: null };
      case FETCH_BOOKS_FAILURE:
        return { ...state, loading: false, error: action.error };
      case ADD_BOOK_SUCCESS:
        return { ...state, books: [...state.books, action.payload], error: null };
      case ADD_BOOK_FAILURE:
        return { ...state, error: action.error };
      case DELETE_BOOK_SUCCESS:
        return {
          ...state,
          books: state.books.filter(book => book.id !== action.payload),
          error: null
        };
      case DELETE_BOOK_FAILURE:
        return { ...state, error: action.error };
      case UPDATE_BOOK_SUCCESS:
        return {
          ...state,
          books: state.books.map(book =>
            book.id === action.payload.id ? action.payload : book
          ),
          error: null
        };
      case UPDATE_BOOK_FAILURE:
        return { ...state, error: action.error };
      default:
        return state;
    }
  }
  
  export default reducer;