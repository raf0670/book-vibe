import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currBook) => {
        const isExistBook = storedBooks.find(curr => curr.bookId === currBook.bookId);
        if (isExistBook) {
            toast.error("Already added to listed books!");
        } else {
            setStoredBooks([...storedBooks, currBook]);
            toast.success(`${currBook.bookName} added to listed books succesfully`)
        }
    };

    const handleWishList = (currBook) => {
        const isExistInReadList = storedBooks.find((book) => book.bookId === currBook.bookId);
        if (isExistInReadList) {
            toast.error(`${currBook.bookName} already exists in read list!`);
            return;
        }

        const isExistBook = wishList.find(curr => curr.bookId === currBook.bookId);
        if (isExistBook) {
            toast.error("Already added to wish list!");
        } else {
            setWishList([...wishList, currBook]);
            toast.success(`${currBook.bookName} added to wish list succesfully`)
        }
    };

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead, wishList, setWishList, handleWishList
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;