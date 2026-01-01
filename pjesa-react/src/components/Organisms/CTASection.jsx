import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function CTASection() {
    const navigate = useNavigate();

    return (
        <Box sx={{
            py: "80px",
            px: "40px",
            backgroundColor: '#2563eb',
            color: 'white'
        }}>
            <Box sx={{
                maxWidth: "700px",
                mx: "auto",
                textAlign: "center"
            }}>
                <h2 style={{
                    marginBottom: '15px',
                    fontWeight: 600,
                    fontSize: '36px',
                    margin: 0
                }}>
                    Fillo të lexosh sot
                </h2>
                <p style={{
                    marginBottom: '40px',
                    fontSize: '16px',
                    opacity: 0.95,
                    lineHeight: 1.7,
                    margin: '15px 0 40px 0'
                }}>
                    Nënshkruhu në pesë minuta. Para se të prish syrin, tashmë ke hyrë në botë të librave më të mirë.
                </p>
                <Box sx={{
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <button 
                        onClick={() => navigate('/#books')}
                        style={{
                            backgroundColor: 'white',
                            color: '#2563eb',
                            fontWeight: 600,
                            fontSize: '16px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: '12px 50px'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                        Zgjidh Librin Tënd
                    </button>
                    <button 
                        onClick={() => navigate('/#aboutus')}
                        style={{
                            borderColor: 'white',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '16px',
                            borderRadius: '6px',
                            border: '2px solid white',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: '10px 48px'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Mesoni më Shumë
                    </button>
                </Box>
            </Box>
        </Box>
    )
}

export default CTASection
