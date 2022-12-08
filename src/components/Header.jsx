import React from 'react';
import avatar from '../assets/images/avatar-1.png';
import logo from '../assets/images/logo.jpeg';

const Header = () => {
  const toggleSidebar = () => {};
  return (
    <header>
      <div className='nav-bar'>
        <div className='menu-icon' onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href='/'>
          <img src={logo} alt='Daily Stop Logo' className='brand-logo' />
        </a>
        <input
          type='text'
          name=''
          id='nav-bar-search'
          placeholder='What do you need to buy...'
        />
        <div className='nav-bar-account'>
          <div className='account'>
            <img src={avatar} alt='' />
            <div>
              <h6>UserName</h6>
              <p>Manager</p>
            </div>
            <i className='fa fa-caret-down'></i>
          </div>
          <ul className='account-dropdown'>
            <li>Saved Items</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
