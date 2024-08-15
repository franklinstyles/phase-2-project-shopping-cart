import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className='footer-links'>
          <a href="https://github.com/franklinstyles" target="_blank" rel="noopener noreferrer">
            Franko
          </a>
          <a href="https://github.com/ianmwangi2" target="_blank" rel="noopener noreferrer">
            Ianoh
          </a>
          <a href="https://github.com/antoniodemax" target="_blank" rel="noopener noreferrer">
            Anto
          </a>
          <a href="https://github.com/Abdirahmanelyas" target="_blank" rel="noopener noreferrer">
            Elyas
          </a>
        </div>
        <p className='footer-info'>
          <span>Follow us on social media:</span>
          <div>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className='social-link'>Twitter</a> |
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className='social-link'>Instagram</a>
          </div>
        </p>
      </div>
    </footer>
  )
}
export default Footer;