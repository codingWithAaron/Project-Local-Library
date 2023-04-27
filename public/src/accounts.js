function findAccountById(accounts=[], id) {
  const result = accounts.find((accountsElement)=>{
    return accountsElement.id === id
  })
  return result
}

function sortAccountsByLastName(accounts=[]) {
  const result = accounts.sort((elementA, elementB)=>{
    return elementA.name.last.toLowerCase() > elementB.name.last.toLowerCase() ? 1 : -1
  })
  return result
}

function getTotalNumberOfBorrows(account={}, books=[]) {
  let result = 0
  books.forEach((bookObj)=>{
    bookObj.borrows.forEach((borrowsObj)=>{
      if (borrowsObj.id === account.id) {
        result += 1
      }
    })
  })
  return result
}

function getBooksPossessedByAccount(account={}, books=[], authors=[]) {
  let allBooks = []

  books.forEach((bookObj)=>{
    const {borrows} = bookObj
    borrows.forEach((borrowsObj)=>{
      if (borrowsObj.id === account.id && borrowsObj.returned === false) {
        bookObj.author = authors.find((authorsObj)=>{
          return authorsObj.id === bookObj.authorId
        })
      
        allBooks.push(bookObj)
      }
    })
    
  })
  console.log(allBooks)
  return allBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
