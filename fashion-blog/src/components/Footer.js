import React from 'react';

function Footer() {
  return (
    <footer>
      <nav aria-label='Footer Navigation' role='navigation'>
        <ul className='footer-nav'>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>Terms of Service</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <p>&copy; 2024 Fashion Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
