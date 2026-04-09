import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-auto shadow-sm">
            <figure className='p-6'>
                <img
                    className='max-h-57.5 rounded-xl'
                    src={book.image}
                    alt="" />
            </figure>
            <div className="card-body">
                <div className='flex gap-2 items-center'>
                    {
                        book.tags.map((tag, ind) => <div key={ind} className="badge text-green-500 font-semibold bg-green-100">{tag}</div>)
                    }
                </div>
                <h2 className="card-title text-2xl font-bold">
                    {book.bookName}
                </h2>
                <p className='font-semibold text-lg'>{book.author}</p>
                <div className="card-actions justify-between border-t border-t-gray-200 pt-5 border-dashed">
                    <div className="font-semibold">{book.category}</div>
                    <div className="font-semibold">{book.rating} ⭐</div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;