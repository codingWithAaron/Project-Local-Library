function findAuthorById(authors=[], id) {
  const result = authors.find((authorElement)=>{
    return authorElement.id === id
  })
  return result
}

function findBookById(books=[], id) {
  const result = books.find((bookElement)=>{
    return bookElement.id === id
  })
  return result
}

function partitionBooksByBorrowedStatus(books=[]) {
// returns an array with two arrays inside of it. 
  const checkedOutBooks = books.filter((booksElement)=>{
    return booksElement.borrows[0].returned === false
  })

  const returnedBooks = books.filter((booksElement)=>{
    return booksElement.borrows[0].returned === true
  })

  let result = [checkedOutBooks, returnedBooks]
  return result
}

function getBorrowersForBook(book={}, accounts=[]) {
  const {borrows} = book
  const result = []

  borrows.forEach((borrowsObj)=>{
    let borrowsId = undefined
    accounts.forEach((accountsObj)=>{
      if (accountsObj.id === borrowsObj.id) {
        borrowsId = accountsObj
        borrowsId.returned=borrowsObj.returned
      }
    })
    if (result.length < 10) {
      result.push(borrowsId)
    }
  })
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
