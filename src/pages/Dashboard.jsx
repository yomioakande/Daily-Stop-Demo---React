import React from 'react';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Sidebar from '../components/Sidebar';
import LowStockTable from '../components/LowStockTable';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section className='main-content open'>
          <h1 className='page-title'>Dashboard</h1>
          <div className='info-details'>
            <div className='row'>
              <InfoCard name='Inventory' amount='30,000' color='text-danger' />
              <InfoCard name='Revenue' amount='40,000' color='text-primary' />
              <InfoCard name='Purchase' amount='70,000' color='text-success' />
              <InfoCard name='Income' amount='25,000' color='text-warning' />
              <InfoCard name='Revenue' amount='40,000' color='text-primary' />
              <InfoCard name='Income' amount='25,000' color='text-warning' />
              <InfoCard name='Inventory' amount='30,000' color='text-danger' />
              <InfoCard name='Purchase' amount='5,500' color='text-success' />
            </div>
          </div>

          <section className='low-stock-list'>
            <h3 className='section-title'>Low Stock List</h3>
            <LowStockTable />
          </section>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
