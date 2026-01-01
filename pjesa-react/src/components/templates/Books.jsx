import { Box } from '@mui/material'
import React, { useState, useEffect, useCallback } from 'react'

function Books() {
    let [page, setPage] = useState(1);
    let [limit] = useState(24);
    let [totalPages, setTotalPages] = useState(1);
    let [books, setBooks] = useState([]);
    let [search, setSearch] = useState("");
    let [typingTimer, setTypingTimer] = useState(null);

    let loadBooks = useCallback((currentPage = 1, searchQuery = "") => {
        fetch(`https://openlibrary.org/search.json?q=every&limit=${limit}&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setTotalPages(Math.ceil(data.numFound / limit));
                
                let allBooks = data.docs;
                
                if (searchQuery) {
                    allBooks = allBooks.filter(b =>
                        b.title && b.title.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }

                setBooks(allBooks);
            });
    }, [limit]);

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

    let renderPagination = () => {
        let visible = 10;
        let start = page - Math.floor(visible / 2);
        let end = page + Math.floor(visible / 2);

        if (start < 1) {
            start = 1;
            end = visible;
        }

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - visible + 1);
        }

        let buttons = [];

        if (page > 1) {
            buttons.push(
                <button
                    key="prev"
                    onClick={() => setPage(page - 1)}
                    style={{
                        padding: '8px 12px',
                        margin: '0 4px',
                        backgroundColor: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    &lt;
                </button>
            );
        }

        for (let i = start; i <= end; i++) {
            buttons.push(
                <button
                    key={i}
                    disabled={i === page}
                    onClick={() => setPage(i)}
                    style={{
                        padding: '8px 12px',
                        margin: '0 4px',
                        backgroundColor: i === page ? '#1d4ed8' : '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: i === page ? 'not-allowed' : 'pointer',
                        fontSize: '14px',
                        opacity: i === page ? 0.6 : 1
                    }}
                >
                    {i}
                </button>
            );
        }

        if (page < totalPages) {
            buttons.push(
                <button
                    key="next"
                    onClick={() => setPage(page + 1)}
                    style={{
                        padding: '8px 12px',
                        margin: '0 4px',
                        backgroundColor: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    &gt;
                </button>
            );
        }

        return buttons;
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box id="books" sx={{
                py: "80px",
                px: "40px",
                backgroundColor: '#fafbfc',
                minHeight: '100vh'
            }}>
                <Box sx={{
                    maxWidth: "1200px",
                    mx: "auto"
                }}>
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: '30px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        fontSize: '36px',
                        margin: '0 0 30px 0'
                    }}>
                        Shfleto Bibliotekën
                    </h2>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '50px'
                    }}>
                        <input
                            id="search"
                            type="text"
                            placeholder="Kërko libra..."
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                padding: '12px 20px',
                                fontSize: '16px',
                                border: '2px solid #2563eb',
                                borderRadius: '6px',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)'}
                            onBlur={(e) => e.target.style.boxShadow = 'none'}
                        />
                    </Box>

                    <Box className="books" sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '30px',
                        mb: '50px'
                    }}>
                        {books.map((book, idx) => (
                            <Box key={idx} className="card" sx={{
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                                    transform: 'translateY(-4px)'
                                }
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    height: '250px',
                                    overflow: 'hidden',
                                    backgroundColor: '#f0f0f0'
                                }}>
                                    <img
                                        src={book.cover_i
                                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                                            : 'https://covers.openlibrary.org/b/id/0-L.jpg'
                                        }
                                        alt={book.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Box>
                                <Box sx={{ p: '15px' }}>
                                    <h3 style={{
                                        margin: '0',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        color: '#1a1a1a',
                                        lineHeight: 1.4,
                                        minHeight: '2.8em'
                                    }}>
                                        {book.title}
                                    </h3>
                                    <p style={{
                                        margin: '8px 0 0 0',
                                        fontSize: '12px',
                                        color: '#666'
                                    }}>
                                        {book.author_name ? book.author_name.join(', ') : 'I panjohur'}
                                    </p>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box className="pagination" sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '8px',
                        flexWrap: 'wrap'
                    }}>
                        {renderPagination()}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Books;
