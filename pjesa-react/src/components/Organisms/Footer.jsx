import React from 'react'

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#0f0f0f',
            color: '#999',
            padding: '40px',
            textAlign: 'center',
            fontSize: '14px',
            borderTop: '1px solid #333'
        }}>
            <p style={{ margin: '10px 0' }}>
                © 2025 Smart Library. Të gjitha të drejtat e autorizuara.
            </p>
            <p style={{ margin: '10px 0' }}>
                Dizajnuar me dashurinë për librat dhe lexuesit.
            </p>
        </footer>
    )
}

export default Footer
