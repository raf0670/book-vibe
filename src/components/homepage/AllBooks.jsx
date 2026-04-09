import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);

    return (
        <div className='w-11/12 sm:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {
                books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
    );
};

export default AllBooks;