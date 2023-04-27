function getTotalBooksCount(books=[]) {
  return books.length
}

function getTotalAccountsCount(accounts=[]) {
  return accounts.length
}

function getBooksBorrowedCount(books=[]) {
  let result = books.reduce((accumulator, booksObj)=>{
    const {borrows} = booksObj
    borrows.forEach((borrowsObj)=>{
      if (borrowsObj.returned === false) {
        accumulator += 1
      }
    })
    return accumulator
  },0)
  return result
}

function getMostCommonGenres(books=[]) {
  let finalResult = []
  let listOfGenreNames = []

  books.forEach((booksObj)=>{
    listOfGenreNames.push(booksObj.genre)
  })

  listOfGenreNames.forEach((nameElement)=>{
    let genreObj = finalResult.find((object)=> object.name === nameElement)
    if (genreObj) {
      genreObj.count++
    }else{
      finalResult.push({name: nameElement, count: 1})
    }
  })
  finalResult.sort((elementA, elementB) => elementB.count - elementA.count)
  while (finalResult.length > 5) finalResult.pop()
  return finalResult
}

function getMostPopularBooks(books) {
  let finalResult = []
  let listOfBookNames = []

  books.forEach((booksObj)=>{
    listOfBookNames.push(booksObj.title)
    listOfBookNames.forEach((nameElement)=>{
      finalResult.push({name: nameElement, count: 1})
    })
    finalResult.forEach((nameObj)=>{
      if (nameObj.name === booksObj.title) {
        nameObj.count = booksObj.borrows.length
      }
    })
  })
  finalResult.sort((elementA, elementB) => elementB.count - elementA.count)
  while (finalResult.length > 5) finalResult.pop()
  return finalResult
}



function getMostPopularAuthors(books=[], authors=[]) {
  let authorId = []

  books.forEach((booksObj)=>{
    authorId.push({name: booksObj.authorId, count: booksObj.borrows.length})

  })

  authorId.forEach((idObj)=>{
    authors.forEach((authorsObj)=>{
      if (authorsObj.id === idObj.name) {
        idObj.name = `${authorsObj.name.first} ${authorsObj.name.last}`
      }
    })
  })
  authorId.sort((elementA, elementB) => elementB.count - elementA.count)
  while (authorId.length > 5) authorId.pop()
  return authorId
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
