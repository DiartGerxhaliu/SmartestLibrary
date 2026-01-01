import React from 'react'

function BookCard({ book }) {
    return (
        <div className="card" style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}>
            <div style={{
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
            </div>
            <div style={{ padding: '15px' }}>
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
            </div>
        </div>
    );
}

export default BookCard;
