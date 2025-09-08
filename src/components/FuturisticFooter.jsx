import React from 'react';

const FuturisticFooter = () => {
  return (
    <footer className="footer" id="contact">
      <div className="grid">
        <div>
          <h4>FERRARI</h4>
          <p className="muted small">© {new Date().getFullYear()} Ferrari S.p.A.</p>
        </div>
        <div>
          <h5>Contact</h5>
          <ul className="list">
            <li><a href="mailto:info@ferrari.com">info@ferrari.com</a></li>
            <li><a href="#">Dealerships</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h5>Ferrari World</h5>
          <ul className="list">
            <li><a href="#">Scuderia Ferrari</a></li>
            <li><a href="#">Museum</a></li>
            <li><a href="#">Store</a></li>
          </ul>
        </div>
        <div>
          <h5>Stay Connected</h5>
          <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Email" required />
            <button className="btn small neon-border" type="submit">→</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;
