import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBook } from '../actions';

function EditBookForm({ bookId }) {
  const book = useSelector(state => state.books.find(book => book.id === bookId));
  const dispatch = useDispatch();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBook({ ...book, title, author }));
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditBookForm;
