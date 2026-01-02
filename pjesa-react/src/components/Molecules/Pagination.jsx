import React from 'react'

function Pagination({ page, totalPages, onPageChange }) {
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

    let btnStyle = {
        padding: '8px 12px',
        margin: '0 4px',
        backgroundColor: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px'
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
        }}>
            {page > 1 && (
                <button onClick={() => onPageChange(page - 1)} style={btnStyle}>&lt;</button>
            )}

            {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(i => (
                <button
                    key={i}
                    disabled={i === page}
                    onClick={() => onPageChange(i)}
                    style={{...btnStyle, opacity: i === page ? 0.6 : 1, cursor: i === page ? 'not-allowed' : 'pointer'}}
                >
                    {i}
                </button>
            ))}

            {page < totalPages && (
                <button onClick={() => onPageChange(page + 1)} style={btnStyle}>&gt;</button>
            )}
        </div>
    );
}

export default Pagination;
