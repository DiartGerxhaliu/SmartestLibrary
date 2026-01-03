import React, { useState } from 'react'

function ContactSection() {
    let [formData, setFormData] = useState({ name: '', email: '', message: '' })

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div id="contact" style={{
            padding: '80px 40px',
            backgroundColor: '#1a1a1a',
            color: '#ffffff'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '36px',
                    margin: '0 0 50px 0'
                }}>
                    Na Kontakto
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px'
                }}>
                    <div>
                        <h3 style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            marginBottom: '20px'
                        }}>
                            Informacioni i Kontaktit
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            marginBottom: '20px',
                            color: '#e0e0e0'
                        }}>
                            Kemi ekipën tonë gati për t'ju ndihmuar me çdo pyetje ose sugjerim.
                        </p>
                        <div style={{ marginTop: '30px' }}>
                            <p style={{ marginBottom: '15px', color: '#e0e0e0' }}>
                                📧 Email: info@smartlibrary.com
                            </p>
                            <p style={{ marginBottom: '15px', color: '#e0e0e0' }}>
                                📱 Telefon: +355 123 456 789
                            </p>
                            <p style={{ marginBottom: '15px', color: '#e0e0e0' }}>
                                📍 Adresa: Tiranë, Shqipëri
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Emri juaj"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '15px',
                                border: '1px solid #444',
                                backgroundColor: '#2a2a2a',
                                color: '#ffffff',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: 'inherit'
                            }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email juaj"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '15px',
                                border: '1px solid #444',
                                backgroundColor: '#2a2a2a',
                                color: '#ffffff',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: 'inherit'
                            }}
                        />
                        <textarea
                            name="message"
                            placeholder="Mesazhi juaj"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                                padding: '15px',
                                border: '1px solid #444',
                                backgroundColor: '#2a2a2a',
                                color: '#ffffff',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: 'inherit',
                                resize: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '15px 30px',
                                backgroundColor: '#2563eb',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontSize: '16px',
                                transition: '0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
                        >
                            Dërgoni Mesazhin
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
