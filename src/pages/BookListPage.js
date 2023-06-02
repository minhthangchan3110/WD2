import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../actions/actions';

function BookListPage() {
  const books = useSelector(state => state.books);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} - {book.author}{' '}
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookListPage;

