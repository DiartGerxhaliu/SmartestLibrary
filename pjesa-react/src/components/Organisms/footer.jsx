import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-border-box">
        
        {/* Rreshti i parë me informacione */}
        <div className="footer-grid">
          
          <div className="footer-column">
            <h3>Na Kontaktoni</h3>
            <p>FIEK, Bregu i Diellit<br />Prishtinë, Kosovë</p>
            <p>(044) 444-444</p>
            <p>info@smartlibrary.com</p>
          </div>

          <div className="footer-column">
            <h3>Shërbimet tona</h3>
            <ul>
              <li>Menaxhimi i Librave</li>
              <li>Kërkimi & Filtrimi</li>
              <li>Porosi Online</li>
              <li>Pagesa Elektronike</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Orari i Punës</h3>
            <p style={{marginBottom: '15px'}}>Smart Library ofron qasje të shpejtë në libra digjitalë dhe rekomandime inteligjente.</p>
            <div className="hours-row">
              <span className="hours-label">Hën - Pre:</span>
              <span>09:00 - 17:00</span>
            </div>
            <div className="hours-row">
              <span className="hours-label">Shtunë:</span>
              <span>09:00 - 14:00</span>
            </div>
            <div className="hours-row">
              <span className="hours-label">Dielë:</span>
              <span style={{color: '#f56565'}}>Mbyllur</span>
            </div>
          </div>
        </div>

        {/* Rreshti i dytë - Logo dhe Drejtat Autoriale */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="logo-icon"></div>
            <span>Smart Library</span>
          </div>

          <div className="copyright-text">
            <p>© 2025. Të gjitha të drejtat e rezervuara.</p>
            <p>Built by Smart Library Members 💙</p>
          </div>

          <div className="social-icons">
            <span>fb</span>
            <span>yt</span>
            <span>tw</span>
            <span>ig</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;