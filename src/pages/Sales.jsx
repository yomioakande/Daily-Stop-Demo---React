import React from 'react';
import Header from '../components/Header';
import SalesTable from '../components/SalesTable';
import Sidebar from '../components/Sidebar';

const Sales = () => {
  document.title = 'Daily Stop | Sales';
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section className='main-content open'>
          <h1 className='page-title'>Sales</h1>
          <SalesTable />
        </section>
      </main>
    </>
  );
};

export default Sales;
