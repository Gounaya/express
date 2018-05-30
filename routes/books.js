var express = require('express');
var router = express.Router();

// import controller for books
var booksController = require('../controllers/books');

router.use( booksController.prepare );
router.get('/', booksController.list);
router.get(/[bB]est/, booksController.best);
router.get('/details/:bookId', booksController.details );
router.put('/details/:bookId', booksController.updateTitle );

module.exports = router;
