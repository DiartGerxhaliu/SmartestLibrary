import React from 'react'

function SearchBar({ search, onSearch }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px'
        }}>
            <input
                type="text"
                placeholder="Kërko libra..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
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
        </div>
    );
}

export default SearchBar;
