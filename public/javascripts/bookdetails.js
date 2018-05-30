var initDetails =
  () =>
    {
      let books = document.getElementsByClassName('book');
      Array.from(books).forEach(
        book => book.addEventListener('mouseover', () => getDetails(book) )
      )

      let inputs = document.getElementsByTagName('input');
      Array.from(inputs).forEach(
        input => {
          input.addEventListener('keydown', () => input.style.backgroundColor = 'rgba(255,0,0,0.5)' );
          input.addEventListener('change', () => updateTitle(input) );
        }
      );
    }

window.addEventListener('DOMContentLoaded', initDetails);

var getDetails =
  book =>
    {
      let id = book.dataset.id;
      fetch(`http://127.0.0.1:3000/books/details/${id}`)
        .then( response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('book unknown');  // else == !response.ok
        })
        .then( book => displayDetails(book) )
        .catch( error => console.log(`problem with book id ${id} : ${error.message}`) );
    }

var displayDetails =
  book =>
    {
      let details = document.getElementById('details');
      replaceContent(details, "title", book.title);
      replaceContent(details, "author", book.author);
      replaceContent(details, "year", book.year);
      details.getElementsByTagName('img')[0].src = book.cover;
    }

var updateTitle =
  (input) => {
    let id = input.dataset.id;
    let body = JSON.stringify({ newTitle : input.value });
    let requestOptions = {
                          method : 'PUT',
                          headers: { "Content-Type": "application/json" },
                          body : body
                         };
    fetch(`http://127.0.0.1:3000/books/details/${id}`, requestOptions)
      .then( response => {
                if (!response.ok) {
                  throw new Error('update failure');
                }
                input.style.backgroundColor = 'white';
      })
      .catch( error => console.log( error.message ) );
  }


var replaceContent =
    (base, className, content) => { base.getElementsByClassName(className)[0].textContent = content; }
