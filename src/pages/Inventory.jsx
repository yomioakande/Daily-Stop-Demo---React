import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import LowStockTable from '../components/LowStockTable';

const Inventory = () => {
  document.title = 'Daily Stop | Inventory';
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section className='main-content open'>
          <h1 className='page-title'>Inventory</h1>
          <a href='/create'>
            <div className='add-btn'>+ Add Item</div>
          </a>
          <LowStockTable />
        </section>
      </main>
    </>
  );
};

export default Inventory;
