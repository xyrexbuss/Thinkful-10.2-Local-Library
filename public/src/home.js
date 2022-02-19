function getTotalBooksCount(books) {
    
  return books.length;
}

function getTotalAccountsCount(accounts) {

  return accounts.length;
}

function getBooksBorrowedCount(books) {
  
  const borrowedBooks = [];
  
  for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].borrows.length; j++) {
          if (books[i].borrows[j].returned === false) 
              borrowedBooks.push(books[i]);
      }
  }
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {

  const allGenres = books.map((book) => book.genre);
  let wordFrequency = {};
  const unsortedArray = [];
  const finalArray = [];

  for (let i = 0; i < allGenres.length; i++) {
      let item = allGenres[i];
      wordFrequency[item] = wordFrequency[item] + 1 || 1;
  }
  
  let genreNames = Object.keys(wordFrequency);
  let frequency = Object.values(wordFrequency);

  for (let i = 0; i < genreNames.length; i++) {
      unsortedArray.push({"name":genreNames[i], "count":frequency[i]});
      unsortedArray.sort((unsortedArrayA, unsortedArrayB) => (unsortedArrayA.count > unsortedArrayB.count ? -1 : 1));
  }
  
  for(let i = 0; i < 5; i++) 
      finalArray.push(unsortedArray[i]);
  
  return finalArray;
  
}
function getMostPopularBooks(books) {

  const borrowCount = []; 
  
  for (let i = 0; i < books.length; i++) 
      borrowCount.push({"name":books[i].title, "count":books[i].borrows.length})

  borrowCount.sort((borrowCountA, borrowCountB) => (borrowCountA.count > borrowCountB.count ? -1 : 1));

  return topFive(borrowCount);
}



function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach((book) => {
      authors.forEach((author) => {
      const full = `${author.name.first} ${author.name.last}`;
      if (book.authorId === author.id)
          popularAuthors.push( {name: full, count: book.borrows.length} )
      
      })
  })
  return topFive(popularAuthors);
}

// helper function 

function topFive(result) {
  return result.sort((valueA, valueB) => valueA.count < valueB.count ? 1 : -1).splice(0,5);
}

module.exports = {
getTotalBooksCount,
getTotalAccountsCount,
getBooksBorrowedCount,
getMostCommonGenres,
getMostPopularBooks,
getMostPopularAuthors,
};