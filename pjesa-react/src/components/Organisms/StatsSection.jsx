import { Box } from '@mui/material'
import React from 'react'

function StatsSection() {
    return (
        <Box sx={{
            py: "60px",
            px: "40px",
            backgroundColor: '#fafbfc'
        }}>
            <Box sx={{
                maxWidth: "1200px",
                mx: "auto"
            }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '15px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    fontSize: '36px',
                    margin: 0
                }}>
                    Leximi i thjeshtë, kulturë për të gjithë
                </h2>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    color: '#666',
                    maxWidth: '600px',
                    margin: '0 auto 50px',
                    fontSize: '16px',
                    lineHeight: 1.7
                }}>
                    Qasje e pandalshme në literaturën shqiptare dhe botërore. Pa më pritje, pa më libreza me gjoba. Vetëm ty, libri, dhe drita.
                </p>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '25% 25% 25% 25%',
                    gap: '20px'
                }}>
                    {[
                        { number: '100K+', label: 'Tituj i disponueshëm' },
                        { number: '24/7', label: 'Qasje kudo, gati' },
                        { number: '0€', label: 'Ditë të para falas' },
                        { number: '15min', label: 'Huazim i çastit' }
                    ].map((stat, idx) => (
                        <Box key={idx} sx={{
                            p: '30px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                borderColor: '#2563eb',
                                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)'
                            }
                        }}>
                            <p style={{
                                fontSize: '36px',
                                fontWeight: 700,
                                color: '#2563eb',
                                margin: '0 0 10px 0'
                            }}>
                                {stat.number}
                            </p>
                            <p style={{
                                color: '#666',
                                fontWeight: 500,
                                margin: 0,
                                fontSize: '14px'
                            }}>
                                {stat.label}
                            </p>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default StatsSection
