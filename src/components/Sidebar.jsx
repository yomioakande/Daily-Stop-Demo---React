import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaWpforms,
  FaUserAlt,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaTruckLoading,
  FaUsers
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const page = location.pathname;
  return (
    <aside>
      <ul className='sidebar open'>
        <Link to='/'>
          <li className={page === '/' ? 'active' : ''}>
            <div className='sidebar-icon'>
              <FaTachometerAlt />
            </div>
            <div className='sidebar-item'>Dashboard</div>
          </li>
        </Link>
        <Link to='/inventory'>
          <li
            className={['/inventory', '/create'].includes(page) ? 'active' : ''}
          >
            <div className='sidebar-icon'>
              <FaWpforms />
            </div>
            <div className='sidebar-item'>Inventory</div>
          </li>
        </Link>
        <Link to='/retailers'>
          <li className={page === '/retailers' ? 'active' : ''}>
            <div className='sidebar-icon'>
              <FaUsers />
            </div>
            <div className='sidebar-item'>Retailers</div>
          </li>
        </Link>
        <Link to='/supply'>
          <li className={page.includes('/supply') ? 'active' : ''}>
            <div className='sidebar-icon'>
              <FaTruckLoading />
            </div>
            <div className='sidebar-item'>Supply</div>
          </li>
        </Link>
        <Link to='/sales'>
          <li className={page.includes('/sales') ? 'active' : ''}>
            <div className='sidebar-icon'>
              <FaShoppingCart />
            </div>
            <div className='sidebar-item'>Sales</div>
          </li>
        </Link>
        <Link to='/invoice'>
          <li className={page.includes('/invoice') ? 'active' : ''}>
            <div className='sidebar-icon'>
              <FaFileInvoiceDollar />
            </div>
            <div className='sidebar-item'>Invoice</div>
          </li>
        </Link>
        <li>
          <div className='sidebar-icon'>
            <FaUserAlt />
          </div>
          <div className='sidebar-item'>Customers</div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
