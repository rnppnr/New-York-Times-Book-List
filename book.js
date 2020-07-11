(() => {
    'use strict'

    function JsonToHtml(book) {
        return `
        <li class="book">      
            <a href="${book.amazon_product_url}">
                <img src="${book.book_image}" alt="Photo of ${book.title}" class="book-photo">
            </a>
            <div class="book-title">${book.title}</div> 
            <div class="book-author">${book.author}</div>
            <br />
            <div class="book-description">${book.description}</div>
        </li>
        `
    }

    $.ajax({
        url: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + config.apiKey,
        dataType: 'json',
        success: (data) => {
            let markup = '<h3 style="text-align: center; margin-top: -10px;">New York Times latest best sellers list</h3>'
            data.results.books.forEach((book) => {                
                markup += JsonToHtml(book)
            })
            $('.js-book-list').append(markup)
        },
        error: () => {
            $('.js-book-list').append('Error retrieving data')
        }
    })
})()