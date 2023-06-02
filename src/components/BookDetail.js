import React from 'react';

function BookDetail({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
    </div>
  );
}

export default BookDetail;
