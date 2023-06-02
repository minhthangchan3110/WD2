import React from 'react';
import { useSelector } from 'react-redux';

function BookPage({ match }) {
  const bookId = Number(match.params.id);
  const book = useSelector(state => state.books.find(book => book.id === bookId));

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}

export default BookPage;
