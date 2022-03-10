function findAccountById(accounts, id) {
    
    const result = accounts.find(account => account.id === id);
    return result;
}

function sortAccountsByLastName(accounts) {

    accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
    return(accounts);
}

function getTotalNumberOfBorrows(account, books) {

    let result = [];
        for (let i = 0; i < books.length; i++) {
            for (let j = 0; j < books[i].borrows.length; j++) {
                if (account.id === books[i].borrows[j].id)
                    result.push(books[i].borrows.id);
            }
        }       
    return(result.length);
}

function getBooksPossessedByAccount(account, books, authors) {

    let result = books.filter(book => book.borrows.find(thisBook => (thisBook.id === account.id && !thisBook.returned)));
    
    result.forEach(book => {
        let thisAuthor = authors.find(author => book.authorId === author.id);
        book["author"] = thisAuthor;
    })
    return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};