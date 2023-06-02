const booksData = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
  ];
  
  export function fetchBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: booksData });
      }, 500);
    });
  }
  
  export function addBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newBook = { ...book, id: Date.now() };
        booksData.push(newBook);
        resolve({ data: newBook });
      }, 500);
    });
  }
  
  export function deleteBook(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = booksData.findIndex(book => book.id === id);
        if (index !== -1) {
          booksData.splice(index, 1);
          resolve();
        } else {
          reject(new Error('Book not found'));
        }
      }, 500);
    });
  }
  
  export function updateBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = booksData.findIndex(item => item.id === book.id);
        if (index !== -1) {
          booksData[index] = book;
          resolve({ data: book });
        } else {
          reject(new Error('Book not found'));
        }
      }, 500);
    });
  }