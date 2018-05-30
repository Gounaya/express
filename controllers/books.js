/*
  controller for /books route
*/

var books = require('../data/books'); // to simulate data acquisition

var allBooks;
var bestBook;

/* middleware that prepares data received in books,
  defining the best book and sorting books in allBooks by author ascending order
  */
var prepare =
  (req, res, next) => {
    bestBook = books[0];
    allBooks = books.slice();
    allBooks.sort( (book1, book2) => book1.author.localeCompare(book2.author) );
    next();
  };

  /*
    controller function for / path, it renders the book list
  */
var list =
  (req, res) => res.render('books',
                               {
                                 title: 'Book list',
                                 books : allBooks
                               });

/*
   controller function for /best path, it displays the best book page
*/

var best =
  (req, res) => res.render('bestbook',
                              { title: 'Best book',
                                book:  bestBook
                              });

/*
  controller function for /details/:bookid path, it displays details for book cooresponding to :bookId
*/
var details =
    (req,res) => {
      let book = books[req.params.bookId - 1];
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).end();
      }
    }

var updateTitle =
  (req, res) => {
    let id = req.params.bookId;
    let newTitle = req.body.newTitle;
    books[id-1].title = newTitle;
    res.status(200).json( { update : 'success' } );
  }


module.exports.prepare = prepare;
module.exports.list = list;
module.exports.best = best;
module.exports.details = details;
module.exports.updateTitle = updateTitle;
