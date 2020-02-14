import React from 'react';

import './header.styles.scss';

const Header = ({ navHeight, homeRef, projectsRef, scrollTo }) => {
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <section id='header' className='header' ref={homeRef}>
      <div className='caption'>
        <div className='item'>
          <span className='name border'>
            Morgan Jun Lin
          </span>
        </div>
        <div className='item'>
          <span className='border'>
            Software Engineer
          </span>
        </div>
      </div>
    </section>
  );
}

export default Header;