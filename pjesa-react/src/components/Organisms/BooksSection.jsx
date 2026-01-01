import React, { useState, useEffect, useCallback } from 'react'
import SearchBar from '../Molecules/SearchBar'
import Pagination from '../Molecules/Pagination'
import BookCard from '../Molecules/BookCard'

function BooksSection() {
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(1);
    let [books, setBooks] = useState([]);
    let [search, setSearch] = useState("");
    let [typingTimer, setTypingTimer] = useState(null);

    let loadBooks = useCallback((currentPage = 1, searchQuery = "") => {
        fetch(`https://openlibrary.org/search.json?q=every&limit=12&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setTotalPages(Math.ceil(data.numFound / 24));
                let allBooks = data.docs;
                if (searchQuery) {
                    allBooks = allBooks.filter(b =>
                        b.title && b.title.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }
                setBooks(allBooks);
            });
    }, []);

    useEffect(() => {
        loadBooks(page, search);
    }, [page, search, loadBooks]);

    let handleSearch = (value) => {
        setSearch(value);
        clearTimeout(typingTimer);
        let newTimer = setTimeout(() => {
            setPage(1);
            loadBooks(1, value);
        }, 300);
        setTypingTimer(newTimer);
    };

    return (
        <div id="books" style={{
            py: "80px",
            px: "40px",
            backgroundColor: '#fafbfc',
            minHeight: '100vh',
            padding: '80px 40px'
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2 style={{
                    textAlign: 'center',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontSize: '36px',
                    margin: '0 0 30px 0'
                }}>
                    Shfleto Bibliotekën
                </h2>

                <SearchBar search={search} onSearch={handleSearch} />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '30px',
                    marginBottom: '50px'
                }}>
                    {books.map((book, idx) => (
                        <BookCard key={idx} book={book} />
                    ))}
                </div>

                <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
        </div>
    );
}

export default BooksSection;
