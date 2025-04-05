import { useState } from 'react';
import './style.css';

const Header = () => {
  const [email, setEmail] = useState('');
  
  return (
    <header className="header">
      <div className="hero">
        <h1 className="hero-title">
          <span className="get-more">We </span>
          <span className="more">Create</span><br />
          <span className="views">You </span>
          <span className="like">Succeed</span><br />
        </h1>
        <p className="hero-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <div className="email-form">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          <button className="attract-btn">ATTRACT</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 