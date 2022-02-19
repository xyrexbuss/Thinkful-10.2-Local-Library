function findAuthorById(authors, id) {
    
  const result = authors.find(author => author.id === id);
  return result;
}

function findBookById(books, id) {

  const result = books.find(book => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {

  const returnedBooks = [];
  const borrowedBooks = [];
  const finalArray = [];

  for (let i = 0; i < books.length; i++) {
      if (books[i].borrows[0].returned) {
          returnedBooks.push(books[i]);
      }
      else {
          borrowedBooks.push(books[i]);
      }    
  }
  finalArray.push(borrowedBooks);  
  finalArray.push(returnedBooks);
  return finalArray;
}

function getBorrowersForBook(book, accounts) {

  let result = [];
  for (let i = 0; i < accounts.length; i++) {
      let account = accounts[i];
      let trans = book.borrows.find((borrow) => account.id === borrow.id);
      if (trans) {
          account.returned = trans.returned;
          result.push(account);
      }
  }
  return result;  
}

module.exports = {
findAuthorById,
findBookById,
partitionBooksByBorrowedStatus,
getBorrowersForBook,
};