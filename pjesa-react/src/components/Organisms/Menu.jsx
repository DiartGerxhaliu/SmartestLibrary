import { Box } from '@mui/material'
import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

function Menu() {
    const navigate = useNavigate();
    const [active, setActive] = useState('/#home');

    let menuItems = [
        { label: 'Ballina', href: '/#home' },
        { label: 'Rreth Nesh', href: '/#aboutus' },
        { label: 'Librat', href: '/#books' },
        { label: 'Na Kontakto', href: '/#contact' }
    ];

    const handleNavClick = (href) => {
        setActive(href);
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{
            width: "90%",
            height: "10vh",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            px: '40px'
        }} component={"n"}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                <img style={{ width: "45px" }} src={Logo} alt="Logo" />
            </Box>
            <Box sx={{
                width: '40%',
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: '50px'
            }}>
                {menuItems.map((item) => {
                    return (
                        <button 
                            key={item.href}
                            onClick={() => handleNavClick(item.href)}
                            style={{
                                color: active === item.href ? '#2563eb' : '#333',
                                fontWeight: active === item.href ? 600 : 500,
                                fontSize: '15px',
                                cursor: 'pointer',
                                transition: 'color 0.3s ease',
                                borderBottom: active === item.href ? '2px solid #2563eb' : 'none',
                                paddingBottom: active === item.href ? '8px' : 0,
                                backgroundColor: 'transparent',
                                border: 'none',
                                padding: '0',
                                font: 'inherit'
                            }}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </Box>
        </Box>
    );
}

export default Menu;