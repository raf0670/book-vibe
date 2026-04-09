import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currBook) => {
        const isExistBook = storedBooks.find(curr => curr.bookId === currBook.bookId);
        if (isExistBook) {
            alert("Already added!");
        } else {
            setStoredBooks([...storedBooks, currBook]);
        }
    };

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;